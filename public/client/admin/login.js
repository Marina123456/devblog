let loginForm=document.querySelector('#form-login-btn');

loginForm.addEventListener('click',function(){
	let user_data={
		user: document.querySelector('#login-user').value,
		password: document.querySelector('#login-password').value
	};
	$.ajax({
		type: 'post',
		url: '/api/login/',
		data: user_data,
  		success: function(data){
    		if (data.status=='OK') {
			alert('Всё ок!');
			console.log(data.user.id);
			/*let cookie_date = new Date () + 30;
			document.cookie = "id="+user.id+";exp="+cookie_date.toGMTString();*/
    		} else {
    			alert('Введенные данные неверны!');
    		}
  		}
	});
});