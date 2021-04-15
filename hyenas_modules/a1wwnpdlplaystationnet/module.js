module.exports = (hyenas) => {
    //a1.ww.np.playstation.net domain

	//Gran Turismo 6 Eula
    hyenas.get('/eula/np/NPWR04712_00/index.xml', (req, res) => 
        res.sendFile('./data/eula/np/NPWR04712_00/index.xml', { root: __dirname }));
};