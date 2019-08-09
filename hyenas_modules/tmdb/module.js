module.exports = (hyenas) => {
    hyenas.get('/tmdb/', (req, res) => res.sendFile('./data/tmdb.html', { root: __dirname }));
    hyenas.get('/tmdb/generator-hmac.js', (req, res) => 
        res.sendFile('./data/generator-hmac.js', { root: __dirname }));
    hyenas.get('/tmdb/app.js', (req, res) => 
        res.sendFile('./data/app.js', { root: __dirname }));
    hyenas.get('/tmdb/unknownTitleID', (req, res) => 
        res.sendFile('./data/unknown.png'));
};