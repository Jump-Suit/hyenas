const { createServer } = require('http');
const { parse } = require('querystring');
const { Builder, parseString } = require('xml2js');
const gen = require('random-seed');

//console.log("Server started!");

createServer(function (req, res) {

  //console.log(`New request to ${req.url} on ${new Date().toISOString().replace('T', ' ').substr(0, 19)}`)

  switch (req.url) {
    case "/nav/auth":

      if (req.method == "POST") {

        res.writeHead(200, {
          'Content-Type': 'application/x-i-5-ticket',
          'X-I-5-Version': "1.0",
          "X-N": "S",
          "X-I-5-Status": "OK",
        });

        /*res.writeHead(200, {
          'Content-Type': 'text/plain',
          'X-I-5-Version': "1.0",
          "X-N": "S"
        });*/
        collectRequestData(req, result => {


          var ticket = ticketGen(result.loginid, result.password, result.serviceid, result.firmware, result.country);

          res.end(ticket);
        });

      } else { // if not a post request

        res.writeHead(400, {
          'Content-Type': 'application/x-i-5-ticket',
          'Filename': 'ticket.dat',
          'X-I-5-Version': "1.0",
          "X-N": "S",
          "X-I-5-Status": "NG",
          "reason": "400"
        }); // likely isn't what its looking for but whatever, its an http response code

        res.end();
      }

      break;

    case "/loginform": // login form, if its not there it shouldn't panic, its just there to make things easier for me

      try {

        var formgen = require('path').resolve(__dirname, 'testingtools', 'loginform.html');

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(require('fs').readFileSync(formgen, 'utf8'));

      } catch (err) {

        res.writeHead(410);
        res.end();
      }
      break;

    case "/profileform":

      try {

        var formgen = require('path').resolve(__dirname, 'testingtools', 'profileform.html');

        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(require('fs').readFileSync(formgen, 'utf8'));

      } catch (err) {

        res.writeHead(410);
        res.end();
      }
      break;

    case "/basic_view/sec/get_self_profile":

      if (req.method == "POST") {


        collectRequestData(req, result => {

          var profile = genProfile(result.profile.ticket, result.profile.env);

          res.writeHead(200);
          res.end(profile);
        });
      } else {
        res.writeHead(400); // likely isn't what its looking for but whatever, its an http response code

        res.end();
      }
      break;

    default: // if there's nothing made for the url
      res.writeHead(404);
      res.end();
  }



}).listen(80);

function ticketGen(loginID, password, serviceID, firmware, country) {

  let verMajor = "3";

  let verMinor = "0";


  let rand = gen.create(loginID + password, firmware, country); // i don't want to make a db so this is done to hopefully recreate the same result over and over

  // field population

  // everything is wrapped in toString to make it hex formatted

  let serialId = randBytes(rand, 20);

  let issuerID = "00000100";

  let currentTime = (new Date).getTime()

  let startTimestamp = currentTime.toString(16);

  let endTimestamp = (currentTime + 86400000).toString(16);

  let accountID = randBytes(rand, 8);

  let username = loginID.split("@")[0]; // its just going to be the login id but just the name

  let lang = "75730001" // technically its 2 parts but they really mean the same thing, "us" then region code 1 or "us"

  let domain = "62330000" // b3

  let yearOfBirth = toPaddedHexNum(rand.intBetween(1970, 2018), 2 * 2); // year

  let monthOfBirth = toPaddedHexNum(rand.intBetween(1, 12), 1 * 2); // month

  let dayOfBirth = toPaddedHexNum(rand.intBetween(1, 31), 1 * 2); // betcha can't guess (who cares if you were born on feburary 31st i don't)

  // padding stuff

  //("000 0000 0000 0000" + i.toString(16)).substr(-16);
  let serviceIDPadded = toPaddedHexString(serviceID, 24 * 2);

  let usernamePadded = toPaddedHexString(username, 32 * 2);

  let ticketBody = `00080014${serialId}`;

  // its segmented to make it a tiny bit easier to red

  ticketBody += `00010004${issuerID}`;


  ticketBody += `00070008${toPaddedHexNum(startTimestamp,8*2)}00070008${toPaddedHexNum(endTimestamp,8*2)}`;

  // timestamps are exactly 8 bytes, but we aren't going to get a timestamp that needs all 8 so we pad them

  ticketBody += `00020008${accountID}`;


  ticketBody += `00040020${usernamePadded}`;


  ticketBody += `00080004${lang}`;


  ticketBody += `00040004${domain}`;


  ticketBody += `00080018${serviceIDPadded}`;


  ticketBody += `30110004${yearOfBirth + monthOfBirth + dayOfBirth}`; // this is returned as an ascii string format


  ticketBody += `0001000426000200` // status


  ticketBody += `3010000000000000` // the random 0 bytes


  let bodyHeader = `300000${((ticketBody.length)/2).toString(16)}`; // divided by 2 as its the amount per 2 bytes

  let footer = `3002004400080004${randBytes(rand, 4)}00080038${randBytes(rand, 56)}`; // a a a a sure

  let ticketButNotHeader = bodyHeader + ticketBody + footer;

  let ticketHeader = `${verMajor}1${verMinor}00000000000${((ticketButNotHeader.length)/2).toString(16)}`;

  let ticket = ticketHeader + ticketButNotHeader
  /*
    console.log(`Header: ${ticketHeader}
    Body: ${bodyHeader + ticketBody} (${(ticketBody.length)/2})
    Footer: ${footer} (${(footer.length)/2})
    `);
  */
  return Buffer.from(ticket, 'hex');


}

function genProfile(ticket64, env) {
  /*
   <profile result="00">
       <jid>[online id ]@b3.[country code].[np, sp-int, qa-prod]</jid>
       <onlinename upd="0">[online id]</onlinename>
       <country>[country code]</country>
       <language1>[language id, 1 is english]</language1>
       <language2 />
       <language3 />
       <aboutme />
       <avatarurl id="1000">[avatar url]</avatarurl>
       <ptlp>[the flair color]</ptlp>
   </profile>
  */

  const onlinename = "online id";

  const jid = `${onlinename}@${"domain"}.${env}`;

  const profile = {
    profile: {
      $: {
        result: '00'
      },
      jid: [jid],
      onlinename: {
        $: {
          upd: '0'
        },
        _: [onlinename]
      },
      country: ["country code"],
      language1: "1",
      language2: "",
      language3: "",
      aboutme: "Description About Me",
      avatarurl: {
        $: {
          id: "1000"
        },
        _: ["url"]
      },
      ptlp: "00000FEE"
    }
  }

  /*
  let profile = {
    'foo:Foo': {
      $: {
        'xmlns:foo': 'http://foo.com'
      },
      'bar:Bar': {
        $: {
          'xmlns:bar': 'http://bar.com'
        }
      }
    }
  }
  */
  var builder = new Builder({
    headless: true
  });

  return builder.buildObject(profile);

}


function randBytes(randGen, length) {

  let bytes = "";

  for (var i = 0; i < length * 2; i++) {
    bytes += randGen.intBetween(0, 15).toString(16); // so this is how i'm going to play it
  }

  return bytes;
}


// stolen functions

function collectRequestData(request, callback) {
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';
  const FORM_XML = 'text/xml';

  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
    switch (request.headers['content-type']) {
      case FORM_URLENCODED:
        callback(parse(body));
        break;
      case FORM_XML:
        parseString(body, (err, xmlResult) => {
          callback(xmlResult)
        });
        break;
      default:
        callback(null);
        break;
    }
  });
}

// these are two functions as strings are padded from end of string to end of length, numbers are from start of length to start of number

function toPaddedHexString(unencodedstr, len) {
  let str = Buffer.from(unencodedstr).toString('hex');
  return str + "0".repeat(len - str.length);
}

function toPaddedHexNum(num, len) {
  let str = num.toString(16);
  return "0".repeat(len - str.length) + str;
}