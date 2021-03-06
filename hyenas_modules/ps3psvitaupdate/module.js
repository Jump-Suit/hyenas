module.exports = (hyenas) => {
	//fus01.ps3.update domain
	
    hyenas.get('/update/ps3/list/us/ps3-updatelist.txt', (req, res) => 
		res.sendFile('./data/update/ps3/list/us/ps3-updatelist.txt', { root: __dirname }));
		
	hyenas.get('/update/ps3/list/ru/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/list/ru/ps3-updatelist.txt', { root: __dirname }));
		
	hyenas.get('/update/ps3/list/au/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/list/au/ps3-updatelist.txt', { root: __dirname }));
    
	hyenas.get('/update/ps3/list/br/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/list/br/ps3-updatelist.txt', { root: __dirname }));
	
	hyenas.get('/update/ps3/list/mx/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/list/mx/ps3-updatelist.txt', { root: __dirname }));
	
	hyenas.get('/update/ps3/list/kr/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/list/kr/ps3-updatelist.txt', { root: __dirname }));
	
	hyenas.get('/update/ps3/image/us/2020_1203_03373a581934f0d2b796156d2fb28b39/PS3UPDAT.PUP', (req, res) => 
        res.sendFile('./data/487/PS3UPDAT.PUP', { root: __dirname }));

	//fjp.ps3.update domain
	hyenas.get('/update/ps3/list/jp/ps3-updatelist.txt', (req, res) =>
		res.sendFile('./data/update/ps3/list/jp/ps3-updatelist.txt', { root: __dirname }));



	/* Testing Hybrid Firmware 4.87.1
	hyenas.get('/update/ps3/image/us/2020_1203_03373a581934f0d2b796156d2fb28b39/PS3UPDAT.PUP', (req, res) => 
        res.sendFile('./data/HFW_4871/HFW_4.87.1_PS3UPDAT.PUP', { root: __dirname }));
	*/
	//fus01.psp2.update domain
	hyenas.get('/update/psp2/list/us/psp2-updatelist.xml', (req, res) =>
		res.sendFile('./data/update/psp2/list/us/psp2-updatelist.xml', { root: __dirname }));
};