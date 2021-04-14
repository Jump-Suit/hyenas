module.exports = (hyenas) => {
	//Zeus Domain - PKGs
	
	//Bioshock 2 Kill 'em Kindly
	hyenas.get('/cdn/UP1001/BLUS30420_00/AYHv5O6H40OU9S8JCGuhXxvkVbi7hvtBJUpRsELFQIbpnD0ya6ivox9N6WPxEElXPp6OPGI7uSnAGoQttn8IbyxidcOINJunHT04V.pkg', (req, res) => {
		res.sendFile('./data/cdn/UP1001/BLUS30420_00/AYHv5O6H40OU9S8JCGuhXxvkVbi7hvtBJUpRsELFQIbpnD0ya6ivox9N6WPxEElXPp6OPGI7uSnAGoQttn8IbyxidcOINJunHT04V.pkg', { root: __dirname });
	});
	//Tom Clancy's Ghost Recon Future Soldier - Uplay Passport
	hyenas.get('/cdn/UP0001/BLUS30521_00/xDvpYJOYULRUbjOIvXWJpSWeEtuOWHyAmnLbyslyqJBoyjfblJFUvPcWchlfuYRuxFywFkaslFGPapkWtpqqaXLQOfUwYUPWaemHu.pkg', (req, res) => {
		res.sendFile('./data/cdn/UP0001/BLUS30521_00/xDvpYJOYULRUbjOIvXWJpSWeEtuOWHyAmnLbyslyqJBoyjfblJFUvPcWchlfuYRuxFywFkaslFGPapkWtpqqaXLQOfUwYUPWaemHu.pkg', { root: __dirname });
	});

};