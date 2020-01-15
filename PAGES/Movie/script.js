let movies;
let infMovies = document.getElementById('movies');
let btn = document.getElementById('btn');
btn.onclick = function (event)
{
	let title = "s=" + document.getElementById('title').value + '&';
	let type = "type=" + document.getElementById('type').value + '&';
	let linkApi = "http://www.omdbapi.com/?"+title+type+"apikey=52162e68";
	getAjax('GET', linkApi, function(data)
	{
		console.log(data);
		movies=JSON.parse(data).Search;
		for(let i=0;i<movies.length;i++)
		{
		let el = document.createElement('DIV');
		el.className='box';
		el.id="div"+i;
		el.innerHTML="<img src='"+movies[i].Poster+"' style='float:left;'>"
		infMovies.appendChild(el);
	}
	});
}
function getAjax(method,url, func)
{
	let request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onreadystatechange = function()
	{
		if (request.readyState == 4 && request.status == 200) 
		{
			func(request.responseText);
		}
	}
	request.send();
}