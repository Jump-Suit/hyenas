module.exports = (hyenas) => {
    hyenas.get('/cdn/comic/US/g', (req, res) => 
        res.sendFile('./data/cdn/comic/US/g.txt', { root: __dirname }));
};