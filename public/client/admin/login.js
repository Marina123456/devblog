let loginForm=document.querySelector('#form-login-btn');

loginForm.addEventListener('click',function(){
	let user_data={
		user: document.querySelector('#login-user'),
		password: document.querySelector('#login-password')
	};
	$.ajax({
		type: 'post',
		url: '/api/login/',
		data: user_data,
  		success: function(data){
  			alert('всё ок!');
    		console.log( data );
  		}
	});
});