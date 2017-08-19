let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let article={
		name: document.querySelector('#add-article #name').value,
		category: document.querySelector('#add-article #category').value,
		image: document.querySelector('#add-article #image').value,
		message: CKEDITOR.instances['message'].getData()
	};
	
	$.ajax({
		type: 'post',
		url: '/api/article/',
		data: article,
  		success: function(data){
  			alert('данные внесены!');
    		console.log( data );
  		}
	});
	
	
});