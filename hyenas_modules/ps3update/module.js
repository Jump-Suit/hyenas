module.exports = (hyenas) => {
    hyenas.get('/update/ps3/list/us/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/ps3-updatelist.txt', { root: __dirname }));
    /*
	hyenas.get('/update/ps3/image/us/2020_1203_03373a581934f0d2b796156d2fb28b39/PS3UPDAT.PUP', (req, res) => 
        res.sendFile('./data/487/PS3UPDAT.PUP', { root: __dirname }));
	*/
	hyenas.get('/update/ps3/image/us/2020_1203_03373a581934f0d2b796156d2fb28b39/PS3UPDAT.PUP', (req, res) => 
        res.sendFile('./data/HFW_4871/HFW_4.87.1_PS3UPDAT.PUP', { root: __dirname }));
	
};