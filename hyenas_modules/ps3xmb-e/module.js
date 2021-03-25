module.exports = (hyenas) => {
    hyenas.get('/xmb/l', (req, res) => 
        res.sendFile('./data/xmb-e/xmb/l', { root: __dirname }));
};