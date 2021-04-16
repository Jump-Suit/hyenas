module.exports = (hyenas) => {
    //Manuals domain
    //HTML - Online Instruction Manual Landing Page
    hyenas.get('/document/en/ps3/current/index.html', (req, res) => 
        res.sendFile('./data/document/en/ps3/current/index.html', { root: __dirname }));

    //Dependent Files - CSS/JS/IMGS
    //CSS
    hyenas.get('/document/en/ps3/current/css/style_import.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/style_import.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/style_import_1080.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/style_import_1080.css', { root: __dirname }));

    hyenas.get('/document/en/ps3/current/css/common.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/common.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/css/header.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/header.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/css/main.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/main.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/menu.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/menu.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/footer.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/footer.css', { root: __dirname }));

    hyenas.get('/document/en/ps3/current/css/common2.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/common2.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/css/header2.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/header2.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/css/main2.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/main2.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/menu2.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/menu2.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/footer2.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/footer2.css', { root: __dirname }));

    hyenas.get('/document/en/ps3/current/css/print.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/print.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/css/searchplus.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/searchplus.css', { root: __dirname }));
    hyenas.get('/document/css_search/ps3/searchplus.css', (req, res) =>
        res.sendFile('./data/document/css_search/ps3/searchplus.css', { root: __dirname }));
    hyenas.get('/document/css_search/ps3/searchplus-sie-ps3.css', (req, res) =>
        res.sendFile('./data/document/css_search/ps3/searchplus-sie-ps3.css', { root: __dirname }));
    //JS
    hyenas.get('/document/en/ps3/current/js/top.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/top.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/js/jumpmenu.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/jumpmenu.js', { root: __dirname }));
    hyenas.get('/document/js_search/searchplus.min.js', (req, res) =>
        res.sendFile('./data/document/js_search/searchplus.min.js', { root: __dirname }));
    hyenas.get('/document/js_search/lang-en-mod.js', (req, res) =>
        res.sendFile('./data/document/js_search/lang-en-mod.js', { root: __dirname }));
    //JPG
    hyenas.get('/document/en/ps3/current/imgs/R3_zoom.jpg', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/R3_zoom.jpg', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/bg_header.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_header.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/bg_mainfix.jpg', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_mainfix.jpg', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/logo_ps3.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/logo_ps3.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/menu_bg_topline.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/menu_bg_topline.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/menu_bg.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/menu_bg.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/menu_end.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/menu_end.gif', { root: __dirname }));

    hyenas.get('/document/en/ps3/current/imgs/i_12.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_12.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_12_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_12_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_11.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_11.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_11_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_11_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_09.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_09.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_09_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_09_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_08.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_08.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_08_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_08_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_07.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_07.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_07_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_07_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_06.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_06.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_06_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_06_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_05.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_05.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_05_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_05_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_04.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_04.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_04_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_04_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_03.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_03.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_03_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_03_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_02.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_02.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_02_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_02_1080.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_01.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_01.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/imgs/i_01_1080.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/i_01_1080.gif', { root: __dirname }));

    //HTML - Users
    hyenas.get('/document/en/ps3/current/users/index.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index.html', { root: __dirname }));

    //CSS
    hyenas.get('/document/en/ps3/current/users/index_files/style_import.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/style_import.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/print.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/print.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/searchplus.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/searchplus.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/searchplus-sie-ps3.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/searchplus-sie-ps3.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/common.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/common.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/users/index_files/header.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/header.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/users/index_files/main.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/main.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/users/index_files/footer.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/footer.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/current/users/index_files/menu.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/menu.css', { root: __dirname }))

    //JS
    hyenas.get('/document/en/ps3/current/users/index_files/lang-en-mod.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/lang-en-mod.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/list.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/list.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/jumpmenu.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/jumpmenu.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/polyfill.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/polyfill.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/searchplus.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/searchplus.js', { root: __dirname }));

    //IMGS
    hyenas.get('/document/en/ps3/current/users/index_files/cat_0008.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/cat_0008.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/back.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/users/index_files/back.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/bg_header.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_header.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/bg_mainfix.jpg', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_mainfix.jpg', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/logo_ps3.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/logo_ps3.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/hr.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/hr.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/imgs/p_arrow-.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/p_arrow-.gif', { root: __dirname }));

    //HTML - Playable Discs
    hyenas.get('/document/en/ps3/playablediscs.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs.html', { root: __dirname }));

    hyenas.get('/document/en/ps3/playablediscs_files/lang-en-mod.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/lang-en-mod.html', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/searchplus.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/searchplus.html', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/searchplus_002.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/searchplus_002.html', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/searchplus-sie-ps3.html', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/searchplus-sie-ps3.html', { root: __dirname }));
    //CSS
    hyenas.get('/document/en/ps3/playablediscs_files/common.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/common.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/playablediscs_files/header.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/header.css', { root: __dirname }))
    hyenas.get('/document/en/ps3/playablediscs_files/main.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/main.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/menu.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/menu.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/footer.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/css/footer.css', { root: __dirname }));

    hyenas.get('/document/en/ps3/playablediscs_files/style_import.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/style_import.css', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/print.css', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/print.css', { root: __dirname }));
    //JS
    hyenas.get('/document/en/ps3/playablediscs_files/top2.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/top2.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/polyfill.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/polyfill.js', { root: __dirname }));
    //IMGs
    hyenas.get('/document/en/ps3/playablediscs_files/playablediscs001.jpg', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/playablediscs001.jpg', { root: __dirname }));
    hyenas.get('/document/en/ps3/playablediscs_files/back_2.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/playablediscs_files/back_2.gif', { root: __dirname }));
    hyenas.get('/document/en/ps3/imgs/bg_header.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_header.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/imgs/bg_mainfix.jpg', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/bg_mainfix.jpg', { root: __dirname }));
    hyenas.get('/document/en/ps3/imgs/logo_ps3.png', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/logo_ps3.png', { root: __dirname }));
    hyenas.get('/document/en/ps3/imgs/hr.gif', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/imgs/hr.gif', { root: __dirname }));
}; 