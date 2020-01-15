$(function()
{
	alert("Документ загружен");
	$('.star').on('mouseenter',function(){
		$(this).css("background","yellow");
		$(this).prevAll().css("background","yellow");
		$(this).nextAll().css("background","grey");

	});

	$('.star').on('click',function(){
		$(this).css("background","red");
		$(this).prevAll().css("background","red");
		$(this).nextAll().css("background","grey");
		$('.star').off('mouseenter');

	});
})