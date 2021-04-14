module.exports = (hyenas) => {
    //Amazon AWS zpr News?
    hyenas.get('/index_s4.xml', (req, res) => 
        res.sendFile('./data/index_s4.xml', { root: __dirname }));
};