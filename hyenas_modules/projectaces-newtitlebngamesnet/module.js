module.exports = (hyenas) => {
	//Project Aces Domain
	//EULA Files
    hyenas.get('/project_events_eula//js/us.js', (req, res) => 
        res.sendFile('./data/project_events_eula/js/us.js', { root: __dirname }));
	hyenas.get('/project_events_eula//js/style.css', (req, res) => 
        res.sendFile('./data/project_events_eula//js/style.css', { root: __dirname }));	
	
};