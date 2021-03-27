module.exports = (hyenas) => {
    //Static-Resource Domain


    hyenas.on('listening', server => {
        if (req.url == '/np/resource/trophy/trophy-status.xml') {
            // redirect to page-b.html with 301 (Moved Permanently) HTTP code in the response
            res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/np/resource/trophy/trophy-status.xml' });
            return res.end();
        } else {
            // for other URLs, try responding with the page
            console.log(req.url)
            // read requested file
            fs.readFile(req.url.substring(1),
                function (err, data) {
                    if (err) throw err;
                    res.writeHead(200);
                    res.write(data.toString('utf8'));
                    return res.end();
                });
        } 
    })

    
    /*
    hyenas.get('/np/resource/trophy/trophy-status.xml', (req, res) => 
        encodeURI(res.sendFile('./data/np/resource/trophy/trophy_status.xml', { root: __dirname })));
	
	hyenas.get('/np/resource/trophy/trophy-status.xml', function(req, res, next) {
      var host = req.header("host");
      if (host.match(/\static-resource.np.community.playstation.net\b/i)) {
        next();
      } else {
        res.redirect(301, "static-resource.np.community.playstation.net"  + req.url);
      }
    });
	*/
    hyenas.get('/np/resource/basic/ttl.xml', (req, res) => 
        res.sendFile('./data/np/resource/basic/ttl.xml', { root: __dirname }));

	hyenas.get('/np/resource/basic/us_searchjid.xml', (req, res) =>
		res.sendFile('./data/np/resource/basic/us_searchjid.xml', { root: __dirname }));

    hyenas.get('/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.xml', (req, res) => 
        res.sendFile('./data/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.txt', { root: __dirname }));

	// Avatars
    hyenas.get('/avatar/default/DefaultAvatar.png', (req, res) => 
        res.sendFile('./data/avatar/default/DefaultAvatar.png', { root: __dirname }));
    hyenas.get('/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', (req, res) => 
        res.sendFile('./data/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', { root: __dirname }));
    hyenas.get('/avatar_n/3RD/EP43321110007_5FEED32BFD118575442A_N.png', (req, res) => 
        res.sendFile('./data/avatar_n/3RD/EP43321110007_5FEED32BFD118575442A_N.png', { root: __dirname }));
};