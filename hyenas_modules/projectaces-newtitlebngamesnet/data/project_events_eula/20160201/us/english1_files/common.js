
var bEnableKeyDown = false;

document.onkeydown = function()
{
	if(!bEnableKeyDown)
	{
		return;
	}

	var message = GetKeyName(window.event.keyCode);

	if(message === "bs")
	{
		var jsonStr = '{ "mode" : "keydown", "key" : \"'+message+'\" }';
		window.external.user( jsonStr );
	}
}

function GetKeyName(keyCode)
{
	var message = "";

	switch(keyCode)
	{
		case 37: message="left";		break;
		case 38: message="up";			break;
		case 39: message="right";		break;
		case 40: message="down";		break;

		case 32: message="decide";		break;
		case  8: message="bs";			break;

		case 112: message="triangle";	break;
		case 113: message="square";		break;
		case 114: message="start";		break;
		case 115: message="select";		break;
		case 116: message="l1";			break;
		case 117: message="r1";			break;
		case 118: message="l2";			break;
		case 119: message="r2";			break;
		case 120: message="l3";			break;
		case 121: message="r3";			break;
	}

	return message;
}

function sendResultMessage(result, area)
{
	var jsonStr = '{ "mode" : "result", "area" : "'+area+'", "result" : "'+result+'" }';

	window.external.user( jsonStr );
}

function selectFunc(mode, area, msg)
{
	switch(mode)
	{
		case "SelectArea":
			location.href = areaValue[area].href1;
			break;

		case "EULA1":
			if(msg=='OK')
			{
				if(areaValue[area].href2 === "")
				{
					sendResultMessage(msg, area);
				}
				else
				{
					location.href = areaValue[area].href2;
				}
			}
			else
			{
				sendResultMessage(msg, area);
			}
			break;

		case "EULA2":
			sendResultMessage(msg, area);
			break;
	}

}

