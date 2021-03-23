module.exports = (hyenas) => {
    hyenas.get('/ps3-eula/psn/us_privacy_en.html', (req, res) => 
        res.sendFile('./data/us_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/ru_privacy_ru.html', (req, res) => 
        res.sendFile('./data/ru_privacy_ru.html', { root: __dirname }));
		
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en.dat', (re, res) =>
		res.sendFile('./data/us_tosua_privacy_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en.html', (re, res) =>
		res.sendFile('./data/us_tosua_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en01.html', (re, res) =>
		res.sendFile('./data/us_tosua_privacy_en01.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en02.html', (re, res) =>
		res.sendFile('./data/us_tosua_privacy_en02.html', { root: __dirname }));
		
	hyenas.get('/ps3-eula/psn/us_tosua_en.html', (re, res) =>
		res.sendFile('./data/us_tosua_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_copyright_en.html', (re, res) =>
		res.sendFile('./data/us_copyright_en.html', { root: __dirname }));
};