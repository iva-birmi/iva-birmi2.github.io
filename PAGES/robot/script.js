$(function()
{
	let answers={
		'Привет':'Хай герл',
		'Как тебя зовут':'Жмышенко Валерий Альбертович',
		'Сколько тебе лет':'64',
		'Кто ты':'Я гадзила',
		'Кто такой глэк':'Глэк - так называют полных идиотов, имеющих дебильное выражение лица'
	}
	let have_answer = false;
	$('#send').click(function()
	{
		let text=$("#text").val();
		if(text !='')
		{
			for(let i in answers)
			{
				if(i==text.toLowerCase().replace(/[.,!?:;()]*/g,'').trim())
				{
					$('result').append('<p>'+answers[i]+'</p>');
					have_answer=true;
					break;
				}
			}
			if(!have_answer)
				$('result').append('<p>Каво?</p>');
			have_answer=false;
			$('#text').val('').focus();
		}
		else
		{
			$('result').append('<p>Ну ты глэк </p>');
		}
	})
})