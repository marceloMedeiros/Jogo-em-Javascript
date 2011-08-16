	var fps = 15;
	var animationSpeed = 3.5;
	var velocidadeMovimento = 4;
	facingRight = false;
	goingUp = false;
	doAnimation = false;
	//criaMapa(4, 6, "Preto", 10, 10, true);
	initListeners();
	window.setInterval('main()', 1000/  fps);
	window.setInterval('animaSprites()', 1000/  animationSpeed);
	
		

function main()
{

	checaInputs();
}

function animaSprites()
{
	anima("emo", 3, 218, 140);
}

function checaInputs()
{
	if (leftDown) 	{ movimenta("emo", 0, -velocidadeMovimento) ; }
	if (rightDown) 	{ movimenta("emo", 0, velocidadeMovimento); }
	if (upDown) 	{ movimenta("emo", -velocidadeMovimento, 0) ; }
	if (downDown) 	{ movimenta("emo", velocidadeMovimento, 0); }
	
	doAnimation = (leftDown || rightDown );
//|| upDown || downDown
}