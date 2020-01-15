//let calc = document.getElementById('calc');
let arrButtons = document.getElementsByClassName('button');
let disp=document.getElementById('display');
let str='';
for(let i=0;i<arrButtons.length;i++)
{
	arrButtons[i].addEventListener('click',calc);
}
function calc(event)
{
	let type = event.target.getAttribute('data-type');
	if(type==='=')
	{
		str=eval(str);
		display.value = str;

	}
	else if (type==='C') 
	{
		str="";
	}
	else
	{
		str+=type;
	}
	display.value=str;
}
let t=document.getElementById('text');
t.onkeypress = function(event)
{
	console.log(event);
	if(event.keycode<48||event.keycode>57)
		return false;
}