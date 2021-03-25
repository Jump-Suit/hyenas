module.exports = (hyenas) => {
    //hyenas.get('/np/resource/trophy/trophy-status.xml', (req, res) => 
        //res.sendFile('./data/static-resource/np/resource/trophy/trophy_status.xml', { root: __dirname }));
		
	hyenas.get('/np/resource/trophy/trophy-status.xml', function(req, res, next) {
      var host = req.header("host");
      if (host.match(/\static-resource.np.community.playstation.net\b/i)) {
        next();
      } else {
        res.redirect(301, "static-resource.np.community.playstation.net"  + req.url);
      }
    });
    hyenas.get('/np/resource/ttl.xml', (req, res) => 
        res.sendFile('./data/np/resource/basic/ttl.xml', { root: __dirname }));

    hyenas.get('/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.xml', (req, res) => 
        res.sendFile('./data/np/resource/title/NPXS01005_00/matching/NPXS01005_00-matching.txt', { root: __dirname }));

	// Avatars
    hyenas.get('/avatar/default/DefaultAvatar.png', (req, res) => 
        res.sendFile('./data/avatar/default/DefaultAvatar.png', { root: __dirname }));
    hyenas.get('/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', (req, res) => 
        res.sendFile('./data/avatar/3RD/EP43321110007_5FEED32BFD118575442A_L.png', { root: __dirname }));
};