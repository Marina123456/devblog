function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function isSetCookie(){
	if (getCookie('id_devblog'))
		return true;
	return false;	
}
function redirectIfNotCookie(){
	if (!isSetCookie()){
		window.location.pathname='/login';
	}
}
