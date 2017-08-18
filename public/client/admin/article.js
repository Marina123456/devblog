let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let article={
		name: document.querySelector('#add-article #name').value,
		category: document.querySelector('#add-article #category').value,
		image: document.querySelector('#add-article #image').value,
		message: CKEDITOR.instances['message'].getData()
	};
	
	//console.log(article);
	$.ajax({
		type: 'post',
		url: '/api/article/',
		data: article,
  		success: function(data){
  			//alert('данные внесены!');
    			console.log( data );
  		}
	});
	
	
	/*let formData = new FormData();
	formData.append('name',document.querySelector('#add-article #name').value);

	fetch("/api/article/", {
    	method: "POST",
    	body: JSON.stringify(article)
	})
	.then(function(res){ console.log(res); return res.text(); })
	.then(function(data){
	 	console.log( data );
	});*/
	
});