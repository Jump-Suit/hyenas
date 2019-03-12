var exports = module.exports = {};

exports.ticketGen = function(loginID, password, serviceID, firmware, country, platform, avatarsize, jidsubdomain) {

  const gen = require('random-seed');


  let verMajor = "3";

  let verMinor = "0";


  let rand = gen.create(loginID + password); // i don't want to make a db so this is done to hopefully recreate the same result over and over

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


};

exports.readTicket = function(ticketB64) { // ticket is given as base64 so we just take that b64 ye?
  
  var ticket = {};

  var ticketHexBuf = Buffer.from(ticketB64, 'base64');
  // ok so like i don't want to do this but 😔
  // first we get the offset of the section start
  /* 

  * username - 0x50 (starts with 00 04 00 20)
  * domain - 0x7C (starts with 00 04 00 04)
  * why do they even use the ticket for these 
  
  */

  // now we _could_ just go the easy way out and just read exactly 20/4 bytes but why not do it the more fun way
  // for reading hex like this, lengths/offsets are multiplied by 2 and converted into decimal
  // thus username is at offset 160
  
  const usernameOffset = 160;
  const domainOffset = 248;

  var ticketHex = ticketHexBuf.toString('hex');

  ticket.onlineID = Buffer.from(readSection(ticketHex, usernameOffset), 'hex').toString('ascii').replace(/\0/g, '');
  // some vomit here so, replace to remove null character, read section to read, buffer to convert hex to ascii
  // also same vomit again lol
  ticket.domain = Buffer.from(readSection(ticketHex, domainOffset), 'hex').toString('ascii').replace(/\0/g, '');
  return ticket;

}

randBytes = function (randGen, length) {

    let bytes = "";

    for (var i = 0; i < length * 2; i++) {
      bytes += randGen.intBetween(0, 15).toString(16); // so this is how i'm going to play it
    }

    return bytes;
};

toPaddedHexString = function(unencodedstr, len) {
  let str = Buffer.from(unencodedstr).toString('hex');
  return str + "0".repeat(len - str.length);
};

toPaddedHexNum = function(num, len) {
  let str = num.toString(16);
  return "0".repeat(len - str.length) + str;
};

readSection = function(hex, offset) {
  var sectionHeader = hex.substring(offset, offset + 8); // get section start
  sectionInfo = readSectionHeader(sectionHeader);
  // ok so now we get the data
  var section = hex.substring(offset + 8, offset + 8 + sectionInfo.contentLength);

  return section;
}

readSectionHeader = function(bytes) {
  if (bytes.length != 8) {
    return;
  }
  
  var sectionInfo = {};
  // a0bb00cc
  // a is type
  // b is data type
  // c is length

  // first get the data we can from the string
  sectionInfo.contentLength = parseInt(bytes.substring(6), 16); // converted to decimal as there is no use for a hex number here
  sectionInfo.contentTypeBytes = bytes.substring(2,4);
  sectionInfo.typeBytes = bytes.substring(0,1);

  // then we p a r s e

  switch(sectionInfo.typeBytes) {
    case "3":
      sectionInfo.type = "section";
      break;
    default:
      sectionInfo.type = "data";
      break;
  }

  switch(sectionInfo.contentTypeBytes) {
    case '00':
      if (sectionInfo.type = "section") {
        sectionInfo.contentType = "body";
      } else {
        sectionInfo.contentType = "none";
      }
      break;

    case '01':
      sectionInfo.contentType = "issuer id";
      break;

    case '02':
      if (sectionInfo.type = "section") {
        sectionInfo.contentType = "footer";
      } else {
        sectionInfo.contentType = "serial id";
      }
      break;

    case '04':
      sectionInfo.contentType = "string";
      break;

    case '07':
      sectionInfo.contentType = "timestamp";
      break;
    
    case '08':
      sectionInfo.contentType = "string";
      break;

    case '10':
      sectionInfo.contentType = "zero";
      break;
    
    case '11':
      sectionInfo.contentType = "dob";
      break;

    default:
      sectionInfo.contentType = "none";
      break;
  }

  return sectionInfo;

}