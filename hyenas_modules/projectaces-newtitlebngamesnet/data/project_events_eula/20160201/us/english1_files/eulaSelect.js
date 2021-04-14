
var areaName = "";
var eulaPhase = 0;

function setup(area, phase)
{
	areaName = area;
	eulaPhase = phase;
	bEnableKeyDown = true;
}

function decideEULA(name)
{
	if(!bEnableKeyDown)
	{
		return;
	}

	var eulaStr = "EULA" + eulaPhase;
	var confirmStr = name;
	selectFunc( eulaStr, areaName, confirmStr );
}

