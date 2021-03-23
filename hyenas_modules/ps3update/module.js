module.exports = (hyenas) => {
    hyenas.get('/update/ps3/list/us/ps3-updatelist.txt', (req, res) => 
        res.sendFile('./data/ps3-updatelist.txt', { root: __dirname }));
};