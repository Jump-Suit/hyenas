module.exports = (hyenas) => {
    const path = require('path');
    //Static-Resource Domain

    /*
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
    */

/*
    const options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
            'Content-Type': 'text/xml',
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    

    hyenas.get('/np/resource/trophy/trophy-status.xml', function (req, res, next) {
        
        var options = {
            root: path.join(__dirname)
        };

        const fileName = req.params.name
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err)
            } else {
                console.log('Sent:', fileName)
            }
        })
    })
    */
    /*
    hyenas.get('/np/resource/trophy/trophy-status.xml', (req, res) =>
        res.sendFile('./data/np/resource/trophy/trophy-status.xml', { root: __dirname }));
    */
	hyenas.get('/np/resource/trophy/trophy-status.xml', function(req, res, next) {
      var host = req.header("host");
      if (host.match(/\static-resource.np.community.playstation.net\b/i)) {
        next();
      } else {
        res.redirect(301, "static-resource.np.community.playstation.net"  + req.url);
      }
    });
	
    hyenas.get('/np/resource/basic/ttl.xml', (req, res) => 
        res.sendFile('./data/np/resource/basic/ttl.xml', { root: __dirname }));

    hyenas.use(function forceLiveDomain(req, res, next) {
        var host = req.get('Host');
        if (host === 'static-resource.np.community.playstation.net') {
            return res.redirect(301, 'https://serviceworke.rs/' + req.originalUrl);
        }
        return next();
    });

    hyenas.get('/np/resource/trophy/trophy-status.xml', function (req, res, next) {
        var host = req.header("host");
        if (host.match(/\static-resource.np.community.playstation.net\b/i)) {
            next();
        } else {
            res.redirect(301, "/np/resource/trophy/trophy-status.xml" + req.url);
        }
    });
    /*
	hyenas.get('/np/resource/basic/us_searchjid.xml', (req, res) =>
		res.sendFile('./data/np/resource/basic/us_searchjid.xml', { root: __dirname }));
    */

	// Avatars
    //Default Avatar
    hyenas.get('/avatar/default/DefaultAvatar.png', (req, res) => 
        res.sendFile('./data/avatar/default/DefaultAvatar.png', { root: __dirname }));
    hyenas.get('/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', (req, res) => 
        res.sendFile('./data/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', { root: __dirname }));
    hyenas.get('/avatar_n/3RD/EP43321110007_5FEED32BFD118575442A_N.png', (req, res) => 
        res.sendFile('./data/avatar_n/3RD/EP43321110007_5FEED32BFD118575442A_N.png', { root: __dirname }));
    //Spiderman
    hyenas.get('/psn-rsc/avatar/UP9000/CUSA02299_00-SPIDERMANAVATAR1_7BFBCC8CD9157D0D21F8_l.png', (req, res) =>
        res.sendFile('./data/psn-rsc/avatar/UP9000/CUSA02299_00-SPIDERMANAVATAR1_7BFBCC8CD9157D0D21F8_l.png', { root: __dirname }));





    //PS Vita
    hyenas.get('/panel_s/SCEI/IP91001111018_D3F55F4266B345BF7CE9_S.png', (req, res) =>
        res.sendFile('./data/panel_s/SCEI/IP91001111018_D3F55F4266B345BF7CE9_S.png', { root: __dirname }));
		
	hyenas.get('/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.txt', { root: __dirname }));
		
	//Tom Clancy's Rainbow Six Vegas 1
	//Lobby
	hyenas.get('/np/resource/title/NPWR00022_00/lobby/NPWR00022_00-lobby.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPWR00022_00/lobby/NPWR00022_00-lobby.xml', { root: __dirname }));
		
	//Tom Clancy's Ghost Recon: Future Soldier
	//Ranking
	hyenas.get('/np/resource/title/NPWR00848_00/ranking/NPWR00848_00-ranking.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPWR00848_00/ranking/NPWR00848_00-ranking.xml', { root: __dirname }));
	//Rating for UplayPassport
	hyenas.get('/np/resource/title/NPWR01196_00/rating/NPWR01196_00-rating.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPWR01196_00/rating/NPWR01196_00-rating.xml', { root: __dirname }));
	//Ace Combat Infinity matching & storage
	hyenas.get('/np/resource/title/NPWR04428_00/matching/NPWR04428_00-matching.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPWR04428_00/matching/NPWR04428_00-matching.xml', { root: __dirname }));
	hyenas.get('/np/resource/title/NPWR04428_00/storage/NPWR04428_00-storage.xml', (req, res) => 
		res.sendFile('./data/np/resource/title/NPWR04428_00/storage/NPWR04428_00-storage.xml', { root: __dirname }));
};