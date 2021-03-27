module.exports = (hyenas) => {
    //Information Board News...

    /* hyenas.get('/e/:region/news/', (req, res) => {
        hyenas.connection.query('SELECT * FROM news WHERE region = :region', 
        { region : req.params.region }, (error, results) => {
            if (error || results.length == 0) { res.end(400); }
            let xml = "<items>";
            for (let i = 0; i < results.length; i++)
                xml += `<item img="${results[i].image}" 
                title="${results[i].title}" 
                date="${results[i].date}" 
                url="${results[i].url}">${results[i].content}</item>`;
            xml += "</items>";
            res.type('text/xml').end(xml);
        });
    }); */ // Until SQL is fully implemented, this should be commented out. //

    hyenas.get('/e/uk/news', (req, res) => 
        res.sendFile('./data/uk_news.xml', { root: __dirname }));
    hyenas.get('/e/au/news', (req, res) => 
        res.sendFile('./data/au_news.xml', { root: __dirname }));
    hyenas.get('/e/nz/news', (req, res) => 
        res.sendFile('./data/nz_news.xml', { root: __dirname }));
    hyenas.get('/e/za/news', (req, res) => 
        res.sendFile('./data/za_news.xml', { root: __dirname }));
    hyenas.get('/e/country-select-cel', (req, res) => 
        res.sendFile('./data/country-select-cel.xml', { root: __dirname }));
};