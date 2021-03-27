module.exports = (hyenas) => {
	/*
	Legal Docs Domain
	
	Dat files determine how many pages exist, if more than one, PS3 requests en01, en02, etc htmls.
	*/
	hyenas.get('/ps3-eula/psn/us_tosua_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_tosua_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_tosua_privacy_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_privacy_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_privacy_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_copyright_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_copyright_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_rating_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_rating_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_health_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_health_en.dat', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_about_en.dat', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_about_en.dat', { root: __dirname }));

    hyenas.get('/ps3-eula/psn/us_privacy_en01.html', (req, res) => 
		res.sendFile('./data/ps3-eula/psn/us_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/ru_privacy_ru.html', (req, res) => 
		res.sendFile('./data/ps3-eula/psn/ru_privacy_ru.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_tosua_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_privacy_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_tosua_privacy_en.html', { root: __dirname }));
	hyenas.get('/ps3-eula/psn/us_tosua_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_tosua_en.html', { root: __dirname }));
	//Copyright and Trademark Notices
	hyenas.get('/ps3-eula/psn/us_copyright_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_copyright_en.html', { root: __dirname }));
	//About Ratings and Parental Controls
	hyenas.get('/ps3-eula/psn/us_rating_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_rating_en.html', { root: __dirname }));
	//Contact Us
	hyenas.get('/ps3-eula/psn/us_about_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_about_en.html', { root: __dirname }));
	//Health Warnings
	hyenas.get('/ps3-eula/psn/us_health_en01.html', (re, res) =>
		res.sendFile('./data/ps3-eula/psn/us_health_en.html', { root: __dirname }));
};