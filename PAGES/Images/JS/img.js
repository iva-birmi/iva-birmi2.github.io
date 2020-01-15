document.addEventListener('DOMContentLoaded',function(
	)
{
	let arrI=document.getElementsByTagName('IMG');
	for(let i=0;i<arrI.length;i++)
	{
		arrI[i].addEventListener('click',imgBorder);
	}
});
function imgBorder(event)
{
	//console.log(event.target);
	//event.target.classList.add('bordered');
	event.target.classList.toggle('bordered');
}