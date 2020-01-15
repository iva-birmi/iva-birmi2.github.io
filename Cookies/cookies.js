let btn= document.singin.send;
btn.addEventListener('click',cookiesWork);
if(get_cookie("username"))
{
	alert("И СНОВА ЗДРАВСТВУЙТЕ!");
	let username = get_cookie("username");
	document.body.innerHTML = "Привет, "+username+", Добро пожаловать на сайт!";
	document.body.innerHTML+="<br><button onclick=\"javascript:delete_cookie('username');document.location.reload();\">Забудь</button>";
}
else
{
	cookiesWork();
}


function cookiesWork(e)
{
	//
	e.preventDefault();
	//САМИ ДЕЛАЕМ УСТАНОВКУ КУКА!!!!set_cookie с учетом ГАЛОЧКИ!!!
set_cookie ( "username", "Вася Пупкин", 2222, 01, 15 );
}
function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}
function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}
function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}
