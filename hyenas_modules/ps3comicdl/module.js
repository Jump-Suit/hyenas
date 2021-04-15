module.exports = (hyenas) => {
    //comic.dl domain

    hyenas.get('/cdn/comic/US/g', (req, res) => 
        res.sendFile('./data/cdn/comic/US/g.txt', { root: __dirname }));
    hyenas.get('/cdn/comic/AU/g', (req, res) => 
        res.sendFile('./data/cdn/comic/AU/g.txt', { root: __dirname }));
};