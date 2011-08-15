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
	var sprite = document.getElementById(IdSprite);
	var xPos = sprite.style.backgroundPosition.substring(0,sprite.style.backgroundPosition.indexOf("px"));
	var yPos = sprite.style.backgroundPosition.substring(sprite.style.backgroundPosition.indexOf("px")+2,
	                                                     sprite.style.backgroundPosition.lastIndexOf("px"));
	
    xPos -= (larguraSprite);
	
	//caso tenha passado do ultimo quadro da animação, volta pro primeiro quadro
	if (xPos < ((((numQuadros-1)*larguraSprite ) + offSet) *-1)) 
	{ 
		xPos = (offSet * -1);
	}
	
	sprite.style.backgroundPosition=xPos + "px " + yPos +"px";
	

}

function movimenta(IdSprite, x, y)
{
	var sprite = document.getElementById(IdSprite);
	var xPos = sprite.style.left.substring(0,sprite.style.left.indexOf("px"));
	var yPos = sprite.style.top.substring(0,sprite.style.top.indexOf("px"));
	
    xPos += x;
	yPos += y;
	
	if (xPos < 0) { xPos = 0 } else if (xPos > 200) { xPos = 200 }
    if (yPos < 0) { yPos = 0 } else	if (yPos > 200) { yPos = 200 }
	
	sprite.style.left = xPos + "px ";
    sprite.style.top = yPos + "px ";
	
}

