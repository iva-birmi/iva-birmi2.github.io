let block=document.getElementById('block');
//клик мышкой
block.onclick = function()
{
	this.style.background = 'green';
}
block.ondblclick = function()
{
	this.style.background = 'pink';
}
block.oncontextmenu = function()
{
	this.style.background = 'black';
	return false;
}
block.onmouseenter = function()
{
	this.style.border = '2px solid blue';
	
}
block.onmouseleave = function()
{
	this.style.border = '0';
}
let col=0;
block.onmousemove = function()
{
	this.style.width = 200+col+"px";
	col++;
}
block.onmousedown = function()
{
	this.style.background = 'cyan';

}
block.onmouseup = function(event)
{
	this.style.background = 'gold';
	console.log("button:"+event.button);
}
