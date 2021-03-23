module.exports = (hyenas) => {
    hyenas.get('/PS3landing', (req, res) => 
        res.sendFile('./data/ps3landing.html', { root: __dirname }));
};