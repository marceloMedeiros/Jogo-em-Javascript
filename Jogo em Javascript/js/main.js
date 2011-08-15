	var fps = 4;
	criaMapa(4, 6, "Preto", 10, 10, true);
	initListeners();
	window.setInterval('main()', 1000/  fps);

function main()
{
	animaSprites();
	checaInputs();
}

function animaSprites()
{
	anima("sprite1", 4, 64, 5);
	anima("sprite2", 4, 64, 265);
	anima("sprite3", 4, 64, 5);
	anima("sprite4", 4, 64, 265);
}

function checaInputs()
{
	if (leftDown) 	{ movimenta("sprite1", 0, 1) ; }
	if (rightDown) 	{ movimenta("sprite1", 0, -1); }
	if (upDown) 	{ movimenta("sprite1", 1, 0) ; }
	if (downDown) 	{ movimenta("sprite1", -1, 0); }
		// spaceDown;

}