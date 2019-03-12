var exports = module.exports = {};


exports.profileGen = function(ticket64, env) {
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

  const { Builder } = require('xml2js');
  const { readTicket } = require('./ticketTools.js');

  ticket = readTicket(ticket64);

  const onlinename = ticket.onlineID;

  const jid = `${onlinename}@${ticket.domain}.${env}`;

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

  
  var builder = new Builder({
    headless: true
  });

  return builder.buildObject(profile);

};