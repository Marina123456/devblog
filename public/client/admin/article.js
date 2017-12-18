let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let article={
		title: document.querySelector('#add-article #name').value,
		category: document.querySelector('#add-article #category').value,
		image: document.querySelector('#add-article #image').value,
		content: CKEDITOR.instances['message'].getData()
	};
	
	$.ajax({
		type: 'post',
		url: '/api/posts/',
		data: article,
  		success: function(data){
  			alert('данные внесены!');
    		console.log( data );
  		}
	});
	
	
});
$(document).ready(function(){
  redirectIfNotCookie();
});
