module.exports = (hyenas) => {
    //Catalog
    hyenas.get('/nsx/material/8/8542c657fc54707d69f0863b970249b8e89553bc-1207262.jpg', (req, res) => 
        res.sendFile('./data/nsx/material/8/8542c657fc54707d69f0863b970249b8e89553bc-1207262.jpg', { root: __dirname }));
    //Themes
    hyenas.get('/nsx/material/f/f8a0ced0c728b032b094463a0ea34748b1be7fb2-1207269.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/f/f8a0ced0c728b032b094463a0ea34748b1be7fb2-1207269.jpg', { root: __dirname }));
    //Add-Ons
    hyenas.get('/nsx/material/3/3d31e1d216647b227f6f1218a613c2491a38597e-1206977.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/3/3d31e1d216647b227f6f1218a613c2491a38597e-1206977.jpg', { root: __dirname }));
    //Avatars
    hyenas.get('/nsx/material/7/7f1262f4dcbb7ef813420dc5bc415ce5bdfdf4e4-1207257.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/7/7f1262f4dcbb7ef813420dc5bc415ce5bdfdf4e4-1207257.jpg', { root: __dirname }));
    //Apps
    hyenas.get('/nsx/material/6/653ab0e8355f5bc6c7177106aba0c0d401da53f9-1206981.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/6/653ab0e8355f5bc6c7177106aba0c0d401da53f9-1206981.jpg', { root: __dirname }));
    //Movies
    hyenas.get('/nsx/material/7/7ac8ebd3de7c54b21a76593a79b8a55580c67477-1207265.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/7/7ac8ebd3de7c54b21a76593a79b8a55580c67477-1207265.jpg', { root: __dirname }));
    //PS Exclusive - The Unfinished Swans
    hyenas.get('/nsx/material/0/00dcbd8e0def3d9340fde00422ff544aeac0e2c3-310043.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/0/00dcbd8e0def3d9340fde00422ff544aeac0e2c3-310043.jpg', { root: __dirname }));
    //NFS:MW - EA In Stores Now > Buy Now
    hyenas.get('/nsx/material/7/7e0201329d2d866cd54539331d1cfe2c16e13912-317353.jpg', (req, res) =>
        res.sendFile('./data/nsx/material/7/7e0201329d2d866cd54539331d1cfe2c16e13912-317353.jpg', { root: __dirname }));
};