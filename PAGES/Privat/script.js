let kurs;
let inf=document.getElementById('inf');
let btn=document.getElementById('btn');
btn.onclick=function()
{
	let linkApi="https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
	getAjax(linkApi,function(data)
	{
		console.log(data);
		kurs=JSON.parse(data);
		console.log(kurs);
		for (let i = 0; i < kurs.length; i++) {
			inf.innerHTML+=kurs[i].ccy+"->"+kurs[i].base_ccy+"Покупка:"+kurs[i].buy+" Продажа:"+kurs[i].sale;
		}
	});
}
function getAjax(url,func)
{
	let request=new XMLHttpRequest();
	request.open("POST",url,true);
	request.onreadystatechange=function()
	{
		if (request.readyState==4&&request.status==200) {
			func(request.responseText);
		}
	}
	request.send();
}