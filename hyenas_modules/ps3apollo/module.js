module.exports = (hyenas) => {
	//Apollo Domain Game PNGs Stored

	//Bioshock 2 Kill 'em Kindly Icon
	hyenas.get('/cdn/UP1001/BLUS30420_00/SVsBnGhMuW68BCnYIESi1DeJr5jdQb4O.png', (req, res) =>
		res.sendFile('./data/cdn/UP1001/BLUS30420_00/SVsBnGhMuW68BCnYIESi1DeJr5jdQb4O.png', { root: __dirname })

		//console.log("Sent Icon")
	);

	//Spotify
	hyenas.get('/cdn/EP4950/NPEB02222_00/wcRD56N5OfHsVgyc9szDYzpPnRMgP6qK.png', (req, res) =>
		res.sendFile('./data/cdn/EP4950/NPEB02222_00/wcRD56N5OfHsVgyc9szDYzpPnRMgP6qK.png', { root: __dirname })
	);


	//Farming Simulator - Modding Pack 1
	hyenas.get('/cdn/UP4133/NPUB31231_00/8r0vjG5A8aaVpyq3NtnXvvaz9NDvY6hG.png', (req, res) =>
		res.sendFile('./data/cdn/UP4133/NPUB31231_00/8r0vjG5A8aaVpyq3NtnXvvaz9NDvY6hG.png', { root: __dirname })
	);
	//Farming Simulator - Modding Pack 2?
	hyenas.get('/cdn/UP4133/NPUB31231_00/P4IwRe0cKpnDNt7zUjRaOyDBCevfYSOp.png', (req, res) =>
		res.sendFile('./data/cdn/UP4133/NPUB31231_00/P4IwRe0cKpnDNt7zUjRaOyDBCevfYSOp.png', { root: __dirname })
	);
	//Farming Simulator - Modding Pack 3?
	hyenas.get('/cdn/UP4133/NPUB31231_00/CQEUkGYJnyITmq3C3pzJHRwDpmPDs5UG.png', (req, res) =>
		res.sendFile('./data/cdn/UP4133/NPUB31231_00/CQEUkGYJnyITmq3C3pzJHRwDpmPDs5UG.png', { root: __dirname })
	);
	//Farming Simulator - Classics Pack
	hyenas.get('/cdn/UP4133/NPUB31231_00/mJIy9vuvFAVzojoxCkJmPNVj2hlx0a9g.png', (req, res) =>
		res.sendFile('./data/cdn/UP4133/NPUB31231_00/mJIy9vuvFAVzojoxCkJmPNVj2hlx0a9g.png', { root: __dirname })
	);
	//Far Cry 4 - Hurk's Redemption
	hyenas.get('/cdn/UP0001/BLUS31420_00/hgU7EsqNYLI44xi4xE6dSPwKDuA38Gls.png', (req, res) =>
		res.sendFile('./data/cdn/UP0001/BLUS31420_00/hgU7EsqNYLI44xi4xE6dSPwKDuA38Gls.png', { root: __dirname })
	);
	//LittleBigPlanet PS Vita Chinese New Year Costumes
	hyenas.get('/cdn/UP9000/PCSA00017_00/PqooDxqeGOAeOhxzzOPejSJECpJWXbRe.png', (req, res) =>
		res.sendFile('./data/cdn/UP9000/PCSA00017_00/PqooDxqeGOAeOhxzzOPejSJECpJWXbRe.png', { root: __dirname })
	);
};