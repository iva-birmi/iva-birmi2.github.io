let res = document.getElementById('res2');
let strFontSize='';
let strStyle=' ';
let strColor=' ';
let strWeight=' ';
let strFontFamily=' ';
let strShadow=' ';


function changeSize()
{
	let res_s = document.getElementById('res_s');
	strFontSize="font-size: "+res_s.value+"px;";
	res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeC()
{
	let res_c = document.getElementById('res_c');
	strColor="text-color: "+res_c.value;
	res.style.cssText=strWidth+strHeight+strColor+strBorder+strBorderRadius+strShadow;
}
function changeBS()
{
	let res_st = document.getElementById('res_st');
	strColor="font-style: "+res_st.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;}
function changeCheck()
{
	let checkBox = document.getElementById('checkB');

	document.getElementById('res_b').disabled=!checkBox.checked;
	document.getElementById('res_bc').disabled=!checkBox.checked;
	document.getElementById('res_bs').disabled=!checkBox.checked;
	document.getElementById('res_br').disabled=!checkBox.checked;

	
}


function changeBC()
{
	let res_bc=document.getElementById('res_bc');
	strBorder="border: "+res_b.value+"px "+res_bs.value+" "+res_bc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeBS()
{
	let res_bs=document.getElementById('res_bs');
	strBorder="border: "+res_b.value+"px "+res_bs.value+" "+res_bc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeBR()
{
    let res_br=document.getElementById('res_br');
    strBorderRadius="border-radius: "+res_br.value+"%;";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeB()
{
	let res_b= document.getElementById('res_b');
		strBorder="border: "+res_b.value+"px "+res_bs.value+" "+res_bc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeCheckSh()
{
	let checkBox = document.getElementById('checkSh');

	document.getElementById('res_sx').disabled=!checkBox.checked;
	document.getElementById('res_sy').disabled=!checkBox.checked;
	document.getElementById('res_sr').disabled=!checkBox.checked;
	document.getElementById('res_sras').disabled=!checkBox.checked;
	document.getElementById('res_sc').disabled=!checkBox.checked;

	
}
function changeSX()
{
	let res_sx= document.getElementById('res_sx');
		strShadow="box-shadow: "+res_sx.value+"px "+res_sy.value+"px "+res_sr.value+"px "+res_sras.value+"px "+res_sc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeSY()
{
	let res_sy= document.getElementById('res_sy');
		strShadow="box-shadow: "+res_sx.value+"px "+res_sy.value+"px "+res_sr.value+"px "+res_sras.value+"px "+res_sc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;
}
function changeSR()
{
	let res_sr= document.getElementById('res_sr');
		strShadow="box-shadow: "+res_sx.value+"px "+res_sy.value+"px "+res_sr.value+"px "+res_sras.value+"px "+res_sc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;}
function changeSRas()
{
	let res_sras= document.getElementById('res_sras');
		strShadow="box-shadow: "+res_sx.value+"px "+res_sy.value+"px "+res_sr.value+"px "+res_sras.value+"px "+res_sc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;}
function changeSC()
{
	let res_sc= document.getElementById('res_sc');
		strShadow="box-shadow: "+res_sx.value+"px "+res_sy.value+"px "+res_sr.value+"px "+res_sras.value+"px "+res_sc.value+";";
res.style.cssText=strFontSize+strStyle+strColor+strWeight+strFontFamily+strShadow;}
function code()
{
	let textCode =document.getElementById('textCode');
	textCode.value=strWidth+"\n"+strHeight+"\n"+strColor+"\n"+strBorder+"\n"+strBorderRadius+"\n"+strShadow;
}
