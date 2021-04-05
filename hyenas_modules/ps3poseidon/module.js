module.exports = (hyenas) => {
    //Poseidon Domain - Game MP4 Trailers and Themes


	//Bioshock 2 Kill 'em Kindly Trailer HD 720
    hyenas.get('/cdn/UP1001/NPUB90301_00/FREE_CONTENTvrr4W3d7V4547d5OINhk/Bioshock2_KillEmKindlyTrailer-HD720.mp4', (req, res) => 
        res.sendFile('./data/cdn/UP1001/NPUB90301_00/FREE_CONTENTvrr4W3d7V4547d5OINhk/Bioshock2_KillEmKindlyTrailer-HD720.mp4', { root: __dirname }));
	
	//Bioshock 2 Multiplayer Theme 

    // Initialize string
    var str = "Bioshock*2*Multiplayer*Theme";
    function splitStr(str) {

        // Function to split string
        var string = str.split("*");

        console.log(string);
    }

    hyenas.get('/cdn/UP1001/NPUB90301_00/FREE_CONTENTof1o3IB2LAMvCItLFxsb/Bioshock 2 Multiplayer Theme.p3t', (req, res) => {
        // Function call
        //splitStr(str),
        var uri = "./data/cdn/UP1001/NPUB90301_00/FREE_CONTENTof1o3IB2LAMvCItLFxsb/Bioshock 2 Multiplayer Theme.p3t";
        encodeURIComponent(uri),
            res.sendFile(uri, { root: __dirname })
    });
};