			// input vars
var leftDown, rightDown, upDown, downDown, spaceDown;

function initListeners() {
	//document.addEventListener( 'mousemove', onMouseMove, false );
	//document.addEventListener( 'mousedown', onMouseDown, false );
	//document.addEventListener( 'mouseup', onMouseUp, false );
	
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );
}

function onKeyDown(e) 
{	
	if(e.keyCode == 38) upDown = true; 
	else if(e.keyCode == 40) downDown = true; 
	else if(e.keyCode == 37) leftDown = true; 
	else if (e.keyCode == 39) rightDown = true; 
	else if (e.keyCode == 32)
	{
		//player.jump(); 
		spaceDown = true;
	}
	if (rightDown){	facingRight = true;	}
	if (leftDown){ facingRight = false;	}
	if (upDown){ goingUp = true; }
	if (downDown){ goingUp = false; }
}

function onKeyUp(e) 
{
	if(e.keyCode == 38) upDown = false; 
	else if(e.keyCode == 40) downDown = false; 
	else if(e.keyCode == 37) leftDown = false; 
	else if (e.keyCode == 39) rightDown = false;
	else if (e.keyCode == 32) spaceDown = false;
	

}