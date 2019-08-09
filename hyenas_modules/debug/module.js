module.exports = (hyenas) => {
    hyenas.get('/debug/forms/generateProfile', (req, res) => 
        res.sendFile('./data/generateProfile.html', { root: __dirname }));
    hyenas.get('/debug/forms/login', (req, res) => 
        res.sendFile('./data/login.html', { root: __dirname }));
    hyenas.get('/debug/forms/profile', (req, res) => 
        res.sendFile('./data/profile.html', { root: __dirname }));
};