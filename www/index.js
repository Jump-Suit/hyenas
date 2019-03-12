const { createServer } = require('http');
const { parse } = require('querystring');
const { parseString } = require('xml2js');

const { resolve } = require('path');

const { ticketGen } = require('./modules/ticketTools.js');
const { profileGen } = require('./modules/profileTools.js');
//const { genprofileform } = require('./modules/profilegenTools.js');
const { signatureform } = require('./modules/signatureform.js');

let port = 80;

if (process.platform != "win32") {

  port = 8080; // on non windows platforms, ports under around 128 are sudo only
  
  if(process.getuid && process.getuid() === 0) { 
    port = 80;
  }
  
}

//console.log("Server started!");

createServer(function (req, res) {

  //console.log(`New request to ${req.url} on ${new Date().toISOString().replace('T', ' ').substr(0, 19)}`)

  switch (req.url) {

    /* currently coded pages go here */
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


          var ticket = ticketGen(result.loginid, result.password, result.serviceid, result.firmware, result.country, result.platform, result.avatarsize, result.jidsubdomain,);

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

    case "/basic_view/sec/get_self_profile":

      if (req.method == "POST") {


        collectRequestData(req, result => {

          var profile = profileGen(result.profile.ticket, result.profile.env);

          res.writeHead(200);
          res.end(profile);
        });
      } else {
        res.writeHead(400); // likely isn't what its looking for but whatever, its an http response code

        res.end();
      }
      break;

    /* network tests */
	  case "/networktest/get_2m": // this could be a local file but debating if we really need 2mb of 0s
      try {
          let bytes = ""; // this method of splitting up bytes and res is a bit faster

          for (var i = 0; i < 2097152; i++) { // that many 0s in one file lol
            bytes += String.fromCharCode(00); // what even is this
          }
          
          res.end(bytes);
      } catch (err) {
        res.writeHead(410);
        res.end();
      }
      break;
	  
  	case "/networktest/post_128":
      try {
        res.writeHead(200); // supposedly all we need is a blank 200 ok
        res.end();
      } catch (err) {
        res.writeHead(410);
        res.end();
      }
      break;
	  
	  /* news */
	  case "/uk/news":
      serveLocalPage(res, 'np_infoboard/uk_news.xml');
      break;

    case "/au/news":
      serveLocalPage(res, 'np_infoboard/au_news.xml');
      break;

	  case "/nz/news":
      serveLocalPage(res, 'np_infoboard/nz_news.xml');
      break;	 

    case "/za/news":
      serveLocalPage(res, 'np_infoboard/za_news.xml');
      break;	

    /* forms */
    case "/loginform":
      serveLocalPage(res, 'testingtools/loginform.html');
      break;

	  case "/genprofileform":
      serveLocalPage(res, 'testingtools/genprofileform.html');
      break;

    case "/profileform":
      serveLocalPage(res, 'testingtools/profileform.html');
      break;
	  
	  case "/genprofileform":
      serveLocalPage(res, 'testingtools/genprofileform.html');
      break;
	  
    case "/signatureform":
      serveLocalPage(res, 'testingtools/signatureform.html');
      break;

    case "/favicon.ico":
    case "/logo.png":
        serveLocalPage(res, 'testingtools/logo.png', 'image/png');
        break;

    default: // if there's nothing made for the url
      res.writeHead(404);
      res.end();
  }



}).listen(port);

/* page url is based on the root of the script, ie. testingtools/loginform.html links to www/testingtools/loginform.html */
function serveLocalPage(res, fileURL, fileType) {
  try {

    fileType = fileType || 'text/html';

    var formgen = resolve(__dirname, fileURL);

    res.writeHead(200, {
      'Content-Type': fileType
    });

    require('fs').readFile(formgen, function (err, content) {
      if (err) {
        res.writeHead(410);
        res.end();
      }      
      res.end(content, 'utf8');
    })
  } catch (err) {
    res.writeHead(410);
    res.end();
  }
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
