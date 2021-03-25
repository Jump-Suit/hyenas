module.exports = (hyenas) => {
    hyenas.get('/themis/snei-orbis/osslicenses/SwordfishSoftwareLicensesPS3.html', (req, res) => 
        res.sendFile('./data/themis/snei-orbis/osslicenses/SwordfishSoftwareLicensesPS3.html', { root: __dirname }));
};