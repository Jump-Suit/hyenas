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
    //GIF
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
        res.sendFile('./data/document/en/ps3/current/js/lang-en-mod.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/list.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/list.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/jumpmenu.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/jumpmenu.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/polyfill.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/polyfill.js', { root: __dirname }));
    hyenas.get('/document/en/ps3/current/users/index_files/searchplus.js', (req, res) =>
        res.sendFile('./data/document/en/ps3/current/js/searchplus.js', { root: __dirname }));

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

    //HTML - Language Selection
    hyenas.get('/document/index.html', (req, res) =>
        res.sendFile('./data/document/index.html', { root: __dirname }));
    //CSS
    hyenas.get('/document/index_files/default.css', (req, res) =>
        res.sendFile('./data/document/index_files/default.css', { root: __dirname }));
    hyenas.get('/document/index_files/common.css', (req, res) =>
        res.sendFile('./data/document/index_files/common.css', { root: __dirname }));
    hyenas.get('/document/index_files/module.css', (req, res) =>
        res.sendFile('./data/document/index_files/module.css', { root: __dirname }));
    hyenas.get('/document/index_files/style.css', (req, res) =>
        res.sendFile('./data/document/index_files/style.css', { root: __dirname }));
    hyenas.get('/document/index_files/style_responsive.css', (req, res) =>
        res.sendFile('./data/document/index_files/style_responsive.css', { root: __dirname }));
    hyenas.get('/document/css/style_responsive.css', (req, res) =>
        res.sendFile('./data/document/css/style_responsive.css', { root: __dirname }));
    //JS
    hyenas.get('/document/index_files/jquery-1.js', (req, res) =>
        res.sendFile('./data/document/index_files/jquery-1.js', { root: __dirname }));
    hyenas.get('/document/index_files/s_code.js', (req, res) =>
        res.sendFile('./data/document/index_files/s_code.js', { root: __dirname }));
    //PNG
    hyenas.get('/document/index_files/L1.png', (req, res) =>
        res.sendFile('./data/document/index_files/L1.png', { root: __dirname }));
    hyenas.get('/document/index_files/L2.png', (req, res) =>
        res.sendFile('./data/document/index_files/L2.png', { root: __dirname }));
    hyenas.get('/document/index_files/L3.png', (req, res) =>
        res.sendFile('./data/document/index_files/L3.png', { root: __dirname }));
    hyenas.get('/document/index_files/L4.png', (req, res) =>
        res.sendFile('./data/document/index_files/L4.png', { root: __dirname }));
    hyenas.get('/document/index_files/L5.png', (req, res) =>
        res.sendFile('./data/document/index_files/L5.png', { root: __dirname }));
    hyenas.get('/document/index_files/L6.png', (req, res) =>
        res.sendFile('./data/document/index_files/L6.png', { root: __dirname }));
    hyenas.get('/document/index_files/L7.png', (req, res) =>
        res.sendFile('./data/document/index_files/L7.png', { root: __dirname }));
    hyenas.get('/document/index_files/L8.png', (req, res) =>
        res.sendFile('./data/document/index_files/L8.png', { root: __dirname }));
    hyenas.get('/document/index_files/L9.png', (req, res) =>
        res.sendFile('./data/document/index_files/L9.png', { root: __dirname }));
    hyenas.get('/document/index_files/L10.png', (req, res) =>
        res.sendFile('./data/document/index_files/L10.png', { root: __dirname }));
    hyenas.get('/document/index_files/L11.png', (req, res) =>
        res.sendFile('./data/document/index_files/L11.png', { root: __dirname }));
    hyenas.get('/document/index_files/L12.png', (req, res) =>
        res.sendFile('./data/document/index_files/L12.png', { root: __dirname }));
    hyenas.get('/document/index_files/L13.png', (req, res) =>
        res.sendFile('./data/document/index_files/L13.png', { root: __dirname }));
    hyenas.get('/document/index_files/L14.png', (req, res) =>
        res.sendFile('./data/document/index_files/L14.png', { root: __dirname }));
    hyenas.get('/document/index_files/L15.png', (req, res) =>
        res.sendFile('./data/document/index_files/L15.png', { root: __dirname }));
    hyenas.get('/document/index_files/L16.png', (req, res) =>
        res.sendFile('./data/document/index_files/L16.png', { root: __dirname }));
    hyenas.get('/document/index_files/L17.png', (req, res) =>
        res.sendFile('./data/document/index_files/L17.png', { root: __dirname }));
    hyenas.get('/document/index_files/L18.png', (req, res) =>
        res.sendFile('./data/document/index_files/L18.png', { root: __dirname }));
    hyenas.get('/document/index_files/L19.png', (req, res) =>
        res.sendFile('./data/document/index_files/L19.png', { root: __dirname }));
    hyenas.get('/document/index_files/L20.png', (req, res) =>
        res.sendFile('./data/document/index_files/L20.png', { root: __dirname }));
    hyenas.get('/document/index_files/L21.png', (req, res) =>
        res.sendFile('./data/document/index_files/L21.png', { root: __dirname }));
    hyenas.get('/document/index_files/L22.png', (req, res) =>
        res.sendFile('./data/document/index_files/L22.png', { root: __dirname }));
    hyenas.get('/document/index_files/L23.png', (req, res) =>
        res.sendFile('./data/document/index_files/L23.png', { root: __dirname }));
    hyenas.get('/document/index_files/L24.png', (req, res) =>
        res.sendFile('./data/document/index_files/L24.png', { root: __dirname }));
    hyenas.get('/document/index_files/L25.png', (req, res) =>
        res.sendFile('./data/document/index_files/L25.png', { root: __dirname }));
    hyenas.get('/document/index_files/L26.png', (req, res) =>
        res.sendFile('./data/document/index_files/L26.png', { root: __dirname }));
    hyenas.get('/document/index_files/L27.png', (req, res) =>
        res.sendFile('./data/document/index_files/L27.png', { root: __dirname }));
    hyenas.get('/document/index_files/L28.png', (req, res) =>
        res.sendFile('./data/document/index_files/L28.png', { root: __dirname }));
    hyenas.get('/document/index_files/sL1.png', (req, res) =>
        res.sendFile('./data/document/index_files/sL1.png', { root: __dirname }));

    hyenas.get('/document/images/bg_headerBox.png', (req, res) =>
        res.sendFile('./data/document/images/bg_headerBox.png', { root: __dirname }));
    hyenas.get('/document/images/bg_body.png', (req, res) =>
        res.sendFile('./data/document/images/bg_body.png', { root: __dirname }));
    hyenas.get('/document/images/bg_wrapper.png', (req, res) =>
        res.sendFile('./data/document/images/bg_wrapper.png', { root: __dirname }));
    hyenas.get('/document/images/logo_PS.png', (req, res) =>
        res.sendFile('./data/document/images/logo_PS.png', { root: __dirname }));


    //HTML - English -> Products
    hyenas.get('/document/en/products.html', (req, res) =>
        res.sendFile('./data/document/en/products.html', { root: __dirname }));
}; 