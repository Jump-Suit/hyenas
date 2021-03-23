module.exports = (hyenas) => {
    hyenas.get('/ps3-eula/psn/us_privacy_en.html', (req, res) => 
        res.sendFile('./data/us_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/ru_privacy_ru.html', (req, res) => 
        res.sendFile('./data/ru_privacy_ru.html', { root: __dirname }));
};