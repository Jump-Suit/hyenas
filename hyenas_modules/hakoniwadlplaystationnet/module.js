module.exports = (hyenas) => {
    //Hakoniwa VSH System PKGs
	//Photo Gallery 2.0
    hyenas.get('/download/hakoniwa/IP9100-NPIA00006_00-VSHMODULE0000029.pkg', (req, res) => 
        res.sendFile('./data//download/hakoniwa/IP9100-NPIA00006_00-VSHMODULE0000029.pkg', { root: __dirname }));
};