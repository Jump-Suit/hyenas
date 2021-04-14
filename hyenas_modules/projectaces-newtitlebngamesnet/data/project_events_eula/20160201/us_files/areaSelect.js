
var xButtonIndex = 0;
var xNum = 3;

function decideArea(name)
{
	location.href = areaValue[name].href1;
}

function setupAreaButton(area)
{
	var str = "<input class=\"submit_button_b\" type=\"button\" name=\""+ area + "\" value=\"" + areaValue[area].value +"\" onClick=decideArea(this.name)>";
	document.write(str);

	if(++xButtonIndex >= xNum)
	{
		document.write("<br>");
		xButtonIndex = 0;
	}
}

