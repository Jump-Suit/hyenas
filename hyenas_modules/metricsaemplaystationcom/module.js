module.exports = (hyenas) => {
    //metrics.aem domain, used for manuals domain

    hyenas.get('/b/ss/sneplaystationmanuals/1/JS-2.6.0/s29773572383873', (req, res) => 
        res.sendFile('./data//b/ss/sneplaystationmanuals/1/JS-2.6.0/s29773572383873.gif', { root: __dirname }));
	hyenas.get('/b/ss/sneplaystationmanuals/1/JS-2.6.0/s22089849912824', (req, res) => 
        res.sendFile('./data//b/ss/sneplaystationmanuals/1/JS-2.6.0/s22089849912824.gif', { root: __dirname }));
	hyenas.get('/b/ss/sneplaystationmanuals/1/JS-2.6.0/s24439225809133', (req, res) => 
        res.sendFile('./data//b/ss/sneplaystationmanuals/1/JS-2.6.0/s24439225809133.gif', { root: __dirname }));
};