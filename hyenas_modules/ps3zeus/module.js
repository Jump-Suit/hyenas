module.exports = (hyenas) => {
	//Zeus Domain - PKGs
	
	//Bioshock 2 Kill 'em Kindly
    hyenas.get('/cdn/UP1001/BLUS30420_00/AYHv5O6H40OU9S8JCGuhXxvkVbi7hvtBJUpRsELFQIbpnD0ya6ivox9N6WPxEElXPp6OPGI7uSnAGoQttn8IbyxidcOINJunHT04V.pkg?product=0084&country=us', (req, res) => 
        res.sendFile('./data/cdn/UP1001/BLUS30420_00/AYHv5O6H40OU9S8JCGuhXxvkVbi7hvtBJUpRsELFQIbpnD0ya6ivox9N6WPxEElXPp6OPGI7uSnAGoQttn8IbyxidcOINJunHT04V.pkg', { root: __dirname }));
};