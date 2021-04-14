module.exports = (hyenas) => {
	//Ares Domain

	//Spotify 
	hyenas.get('/cdn/EP4950/NPEB02222_00/EP4950-NPEB02222_00-SPOTIFY0FULL0000_bg_3_7ea2eb271962ebd895e1a4877c6ddae436ae1244.pkg', (req, res) =>
		res.sendFile('./data/cdn/EP4950/NPEB02222_00/EP4950-NPEB02222_00-SPOTIFY0FULL0000_bg_3_7ea2eb271962ebd895e1a4877c6ddae436ae1244.pkg', { root: __dirname, })
	);

	//Youtube
	hyenas.get('/cdn/UP2075/NPUP10028_00/UjRersfAsPypGlRZKXWbDiWvxBdKwqqGKKXlDHQQvaykMilfnlvIedaaSDjvlHKLPDpeLvLjvdiakTPpdCvMJRkHhSoqZRWIkTKSH.pkg', (req, res) =>
		res.sendFile('./data/cdn/UP2075/NPUP10028_00/UjRersfAsPypGlRZKXWbDiWvxBdKwqqGKKXlDHQQvaykMilfnlvIedaaSDjvlHKLPDpeLvLjvdiakTPpdCvMJRkHhSoqZRWIkTKSH.pkg', { root: __dirname, })
	);
};