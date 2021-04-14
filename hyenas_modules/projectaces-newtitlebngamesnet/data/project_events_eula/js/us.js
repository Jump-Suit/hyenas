areaValue = {
	"us-en": { 
		"value": "English",
		"href1": "english1.html",
		"href2": ""
	},
	"us-fr": { 
		"value": "français",
		"href1": "french1.html",
		"href2": ""
	},
	"us-es": { 
		"value": "español",
		"href1": "spanish1.html",
		"href2": ""
	},
	"us-de": {
		"value": "Deutsch",
		"href1": "german1.html",
		"href2": ""
	},
	"us-it": {
		"value": "italiano",
		"href1": "italian1.html",
		"href2": ""
	},
	"us-ru": {
		"value": "Русский язык",
		"href1": "russian1.html",
		"href2": ""
	},
	"us-ja": {
		"value": "日本語",
		"href1": "japanese1.html",
		"href2": ""
	}
};

function setupAreaButtons()
{
	document.write("<form style=\"text-align:center\" name='AREA' action='#'>");

	setupAreaButton("us-en");
	setupAreaButton("us-fr");
	setupAreaButton("us-es");
	setupAreaButton("us-de");
	setupAreaButton("us-it");
	setupAreaButton("us-ru");
	setupAreaButton("us-ja");

	document.write("</form>");

	bEnableKeyDown	= true;
}
