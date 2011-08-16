// ---------------------------------------------------------------------------
// Função para animar Sprites
//
// -------------------------------
// -----Argumentos da função:-----
// -------------------------------
//
// IdSprite - ID da div que contem o sprite a ser animado
// numQuadros - numero total de quadros da animação
// larguraSprite - pixels de largura de cada quadro de animação
// vpadding - usado para centralizar o quadro de animação, se necessário
//
// ----------------------------------------------------------------------------

function anima(IdSprite, numQuadros, larguraSprite, offSet)
{
 	if (doAnimation)
	{		
		var sprite = document.getElementById(IdSprite);
		var bgPos = document.defaultView.getComputedStyle(sprite,null).getPropertyValue('background-position')
		var xPos = bgPos.substring(0,bgPos.indexOf("px"));
		var yPos = bgPos.substring(bgPos.indexOf("px")+2,bgPos.lastIndexOf("px"));
					
		document.defaultView.getComputedStyle(sprite,null).getPropertyValue('background-position')												 
	    xPos -= (larguraSprite);
		
		//caso tenha passado do ultimo quadro da animação, volta pro primeiro quadro
		if (xPos < ((((numQuadros-1)*larguraSprite ) + offSet) *-1)) 
		{ 
			//xPos = (offSet * -1);
			  sprite.style.backgroundPosition='inherit';
		}
		else{
					sprite.style.backgroundPosition=xPos + "px " + yPos + "px";
		}
			}
}

function movimenta(IdSprite, x, y)
{
	var sprite = document.getElementById(IdSprite);
	var xPos = parseInt(sprite.style.top.substring(0,sprite.style.top.indexOf("px")));
	var yPos = parseInt(sprite.style.left.substring(0,sprite.style.left.indexOf("px")));
	
    xPos += x;
	yPos += y;
	
	if (xPos < 0) { xPos = 0 } //else if (xPos > 200) { xPos = 200 }
    if (yPos < 0) { yPos = 0 } //else if (yPos > 200) { yPos = 200 }
	
	
	sprite.style.top = xPos + "px ";
    sprite.style.left = yPos + "px ";
	
	if (!facingRight)
	{
		if (sprite.className.indexOf("rotaciona") == -1)
		{
			sprite.className += " rotaciona";
		}
	}
	else
	{
		if (sprite.className.indexOf("rotaciona") > -1)
		{
		sprite.className = sprite.className.replace(" rotaciona","");
		}
	}
	
	var spriteShortName = sprite.className.substring(0,sprite.className.indexOf("-"));
	var spriteAnimation = sprite.className.substring(sprite.className.indexOf("-"), sprite.className.indexOf(" "));	
	var spriteFullname = spriteShortName + spriteAnimation
	
	if (goingUp)
	{		
		if (sprite.className.indexOf("Back") == -1)
		{
		    sprite.style.backgroundPosition='inherit';
			sprite.className = sprite.className.replace(spriteFullname,spriteShortName + "-Back");
		/*	if (sprite.className.indexOf("rotaciona") == -1){sprite.className += " rotaciona";}
			else{sprite.className = sprite.className.replace(" rotaciona","");}
			facingRight = !facingRight*/
		}
		
	}
	else
	{
		if (sprite.className.indexOf("Normal") == -1)
		{
		    sprite.style.backgroundPosition='inherit';
			sprite.className = sprite.className.replace(spriteFullname,spriteShortName + "-Normal");	
			/*if (sprite.className.indexOf("rotaciona") == -1){sprite.className += " rotaciona";}
			else{sprite.className = sprite.className.replace(" rotaciona","");}	
			facingRight = !facingRight*/
		}
	}
}

