const path = require('path');
const { readdirSync } = require('fs');
const config = require('./config.json');
const express = require('express'),
      hyenas = express();

      const { parse } = require('querystring'),
      { parseString } = require('xml2js');

      const { ticketGen } = require('./local_modules/ticketTools.js'),
      { profileGen } = require('./local_modules/profileTools.js');

hyenas.use(express.static(config.static));

const updns = require('updns').createServer(53, '127.0.0.1')


// Updns functions, error and starting Updns as a service.
updns.on('error', error => {
    console.log(error)
})

updns.on('listening', server => {
    console.log('DNS service has started')
})

//TLSv1.2 Testing with a Certificate and Key.

var fs = require('fs');
var http = require('http');
var https = require('https');
//var privateKey = fs.readFileSync('certs/SCEIDNASROOT05.key', 'utf8');
//var certificate = fs.readFileSync('certs/SCEIDNASROOT05.crt', 'utf8');

//var credentials = { key: privateKey, cert: certificate };

var httpsServer = https.createServer(/*credentials,*/ hyenas);


httpsServer.listen(config.port3, () => console.log(`Hyenas has started https server on Port: ${config.port3}`));


/*
updns.on('message', (domain, send, proxy) => {
    if(domain === 'playstation.com'){
		console.log("Redirecting ${domain}")
        send('127.0.0.1')
    }else {
        proxy('127.0.0.1')
    }
})
*/

//MySQL Testing
/*
const sql = require('mysql');


hyenas.connection = sql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  insecureAuth: true
});

hyenas.connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) 
      return this.escape(values[key]);
    return txt;
  }.bind(this));
};

hyenas.connection.connect((err) => {
  if (err) throw err;
  console.log(`[OK] SQL connection made to database: ${config.database}`);
});
*/ // Until proper SQL is setup, this should be commented, I suppose. //


// Weird module setup, should probably be changed at some point. //

const getModules = source => readdirSync(source, { withFileTypes: true })
.filter(dirent => dirent.isDirectory())
.map(dirent => dirent.name);

const modules = getModules(path.join(__dirname, config.modules));
modules.forEach((module) => {
  try {
    require(path.join(__dirname, config.modules, module, 'module.js'))(hyenas)
      console.log(`Hyenas has initialized module: ${module}`);
  } catch (error) { console.log(`Hyenas failed to initialize module: ${module}`)}
});
hyenas.post('/nav/auth/', (req, res) => {
  res.writeHead(200, {
      'Content-Type': 'application/x-i-5-ticket',
      'X-I-5-Version': '1.0',
      'X-N': 'S',
      'X-I-5-Status': 'OK'
  });
  collectRequestData(req, result => 
    res.end(ticketGen(result.loginid, result.password, result.serviceid)));
});

hyenas.get('/nav/auth/', (req, res) => {
  res.writeHead(400, {
    'Content-Type': 'application/x-i-5-ticket',
    'Filename': 'ticket.dat',
    'X-I-5-Version': "1.0",
    'X-N': 'S',
    'X-I-5-Status': 'NG',
    'reason': '400'
  }); // likely isn't what its looking for but whatever, its an http response code
  res.end();
});

hyenas.post('/basic_view/sec/get_self_profile/', (req, res) => {
  collectRequestData(req, result => 
    res.status(200).end(profileGen(result.profile.ticket[0], result.profile.env)));
});

hyenas.get('/basic_view/sec/get_self_profile', (req, res) => res.status(400).end());

//Network Test Functions
hyenas.get('/networktest/get_2m', (req, res) => {
  try {
      res.end(Buffer.alloc(2097152));
  } catch (err) { res.status(410).end(); }
});

hyenas.get('/gs2/networktest/get_6m', (req, res) => 
  res.sendFile(path.join(__dirname, config.system, 'networktest/get_6m')));

hyenas.post('/networktest/post_128', (req, res) => res.status(200).end());

//Start Hyenas on Port 80 as port1 and Port 53 as port2
hyenas.listen(config.port1, () => console.log(`Hyenas has started on Port: ${config.port1}`));
hyenas.listen(config.port2, () => console.log(`Hyenas has started on Port: ${config.port2}`));

hyenas.listen(config.port4, () => console.log(`Hyenas has started on Port: ${config.port4}`));

// Yay, stolen functions!
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