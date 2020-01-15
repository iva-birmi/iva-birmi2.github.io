let canva= document.getElementById("canva");
let ctx= canva.getContext('2d');
let myColor="red";
let myRange=1;
document.getElementById('color').oninput=function()
{
	myColor=this.value;
}
document.getElementById('range').oninput=function()
{
	myRange=this.value;
}
canva.onmousedown=function()
{
	canva.onmousemove= function(event)
	{
		let x =event.offsetX;
		let y = event.offsetY;
		ctx.fillRect(x-5,y-5,myRange,myRange);
		ctx.fillStyle=myColor;
		ctx.fill();
	}
	canva.onmouseup=function(event)
	{
		canva.onmousemove=null;
	}
}

let canva2=document.getElementById('canva2');
let ctx2=canva2.getContext('2d');
let R = 12;
let r =75;
let d=56;
let teta=0;
let timer;
document.getElementById('rangeR').oninput=function()
{
	R=this.value;
}
document.getElementById('ranged').oninput=function()
{
	d=this.value;
}
document.getElementById('ranger').oninput=function()
{
	r=this.value;
}


function spiro()
{
	let x =(R-r)*Math.cos(teta)+d*Math.cos((R-r)*teta/r);
	let y =(R-r)*Math.sin(teta)-d*Math.sin((R-r)*teta/r);
	teta+=0.1;
	ctx2.fillRect(300+x,300+y,4,4);
	timer=setTimeout(spiro,10);
}
spiro();

document.getElementById("cleaner").onclick=function(){
	timer=null;
	//clearTimeout(timer);
	ctx2.clearRect(0,0,600,600);
}