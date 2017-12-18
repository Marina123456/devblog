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
			
			let cookie_date = new Date;
			cookie_date.setDate(cookie_date.getDate() + 1);
			document.cookie = "id_devblog="+user.id+";expires="+cookie_date.toGMTString();
			alert('Всё ок!');
			
			
    		} else {
    			alert('Введенные данные неверны!');
    		}
  		}
	});
});
