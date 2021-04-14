module.exports = (hyenas) => {
	//HTML
    hyenas.get('/PS3landing', (req, res) => 
        res.sendFile('./data/ps3browser.html', { root: __dirname }));
	hyenas.get('/en-us/explore/ps3-portal/ps3browser/', (req, res) => 
        res.sendFile('./data/ps3browser.html', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize.html', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize.html', { root: __dirname }));
		
	//PNG
	//Fifa 15 PNG
	hyenas.get('/ps3browser_files/ea-sports-fifa-15-listing-thumb-02-ps4-ps3-psv-us-05sep14.png', (req, res) => 
        res.sendFile('./data/ps3browser_files/ea-sports-fifa-15-listing-thumb-02-ps4-ps3-psv-us-05sep14.png', { root: __dirname }));
	//Dragon Ball Xenoverse
	hyenas.get('/ps3browser_files/dragonball-xenoverse-listing-thumb-01-ps4-ps3-us-18feb15.png', (req, res) => 
        res.sendFile('./data/ps3browser_files/dragonball-xenoverse-listing-thumb-01-ps4-ps3-us-18feb15.png', { root: __dirname }));
	//Minecraft
	hyenas.get('/ps3browser_files/micraft-listing-thumb-02-ps3-us-20sep16.png', (req, res) => 
        res.sendFile('./data/ps3browser_files/micraft-listing-thumb-02-ps3-us-20sep16.png', { root: __dirname }));
	//The Last of Us Listing
	hyenas.get('/ps3browser_files/the-last-of-us-listing-thumb-01-ps3-us-20nov14.png', (req, res) => 
        res.sendFile('./data/ps3browser_files/the-last-of-us-listing-thumb-01-ps3-us-20nov14.png', { root: __dirname }));
	//Call of Duty Advanced Warfare
	hyenas.get('/ps3browser_files/call-of-duty-advanced-warfare-listing-thumb-01-us-05may14.png', (req, res) => 
        res.sendFile('./data/ps3browser_files/call-of-duty-advanced-warfare-listing-thumb-01-us-05may14.png', { root: __dirname }));
		
	//JPG
	//NBA 2K17 JPG
	hyenas.get('/ps3browser_files/nba-2k17-homepage-marquee-portal-01-us-20sep16.jpg', (req, res) => 
        res.sendFile('./data/ps3browser_files/nba-2k17-homepage-marquee-portal-01-us-20sep16.jpg', { root: __dirname }));
	//Lego Star Wars The Force Awakens JPG
	hyenas.get('/ps3browser_files/lego-star-wars-the-force-awakens-homepage-marquee-portal-01-.jpg', (req, res) => 
        res.sendFile('./data/ps3browser_files/lego-star-wars-the-force-awakens-homepage-marquee-portal-01-.jpg', { root: __dirname }));
	//Persona 5
	hyenas.get('/ps3browser_files/persona-5-homepage-marquee-portal-01-us-04apr17.jpg', (req, res) => 
        res.sendFile('./data/ps3browser_files/persona-5-homepage-marquee-portal-01-us-04apr17.jpg', { root: __dirname }));
		
	//Javascript Files
	hyenas.get('/ps3browser_files/rz2hywbai.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/rz2hywbai.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/analytics.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/analytics.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/playback.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/playback.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/wombat.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/wombat.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/jquery.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/jquery.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/utils.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/utils.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/granite.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/granite.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/launch-557ae5a31b13.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/launch-557ae5a31b13.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/appMeasurement.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/appMeasurement.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/jquery_002.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/jquery_002.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/jquery_003.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/jquery_003.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibrarymanager.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibrarymanager.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/Utils.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/Utils.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibs_preload.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibs_preload.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/ps-widget_002.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/ps-widget_002.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/ps-utid.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/ps-utid.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/sb-toolbar-critical-67a7a3f2e9d39750b38a62881ca08e6e.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/sb-toolbar-critical-67a7a3f2e9d39750b38a62881ca08e6e.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/sb-toolbar-af5a37231a8f811b9cb4b009bb9d160c.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/sb-toolbar-af5a37231a8f811b9cb4b009bb9d160c.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/shared.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/shared.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/modern.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/modern.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/kernel.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/kernel.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/bootstrap.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/bootstrap.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/ps-widget.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/ps-widget.js', { root: __dirname }));
		
	//CSS 
	hyenas.get('/ps3browser_files/banner-styles.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/banner-styles.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/iconochive.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/iconochive.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibs_base.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibs_base.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibs_base.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibs_base.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibs-all.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibs-all.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/clientlibs-all.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/clientlibs-all.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/shared-nav.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/shared-nav.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/shared-nav.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/shared-nav.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/font-all-no-italic.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/font-all-no-italic.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/record.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/record.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/sb-toolbar-52fedbef21fcd6197cc8e941f5d1fdfe.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/sb-toolbar-52fedbef21fcd6197cc8e941f5d1fdfe.css', { root: __dirname }));
		
		
	//Authorize_data
	hyenas.get('/ps3browser_files/authorize_data/jquery-1.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/jquery-1.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/jquery-ui.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/jquery-ui.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/archive.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/archive.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/styles.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/styles.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/web.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/web.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/sb-toolbar-52fedbef21fcd6197cc8e941f5d1fdfe.css', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/sb-toolbar-52fedbef21fcd6197cc8e941f5d1fdfe.css', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/bootstrap.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/bootstrap.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/clipboard.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/clipboard.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/regenerator-runtime-polyfill.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/regenerator-runtime-polyfill.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/ie-dom-node-remove-polyfill.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/ie-dom-node-remove-polyfill.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/polyfill.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/polyfill.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/analytics.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/analytics.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/webcomponents-bundle.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/webcomponents-bundle.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/more-facets.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/more-facets.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/ia-topnav.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/ia-topnav.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/react.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/react.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/react-dom.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/react-dom.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/archive.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/archive.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/areact.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/areact.js', { root: __dirname }));
	hyenas.get('/ps3browser_files/authorize_data/raven.js', (req, res) => 
        res.sendFile('./data/ps3browser_files/authorize_data/raven.js', { root: __dirname }));
};