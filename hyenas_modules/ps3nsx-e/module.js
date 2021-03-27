module.exports = (hyenas) => {
    hyenas.get('/nsx/log', (req, res) => 
        res.sendFile('./data/log.txt', { root: __dirname }));
};