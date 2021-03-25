module.exports = (hyenas) => {
    hyenas.get('/cdn/video/US/g', (req, res) => 
        res.sendFile('./data/cdn/video/US/g.txt', { root: __dirname }));
};