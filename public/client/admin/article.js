let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let article={
		name: document.querySelector('#add-article #name').value,
		category: document.querySelector('#add-article #category').value,
		image: document.querySelector('#add-article #image').value,
		message: CKEDITOR.instances['message'].getData()
	};
	
	console.log(article);
	
	let formData = new FormData();
	formData.append("json",JSON.stringify(article));
		
	fetch("/api/article/", {
    	method: "POST",
    	body: formData
	})
	.then(function(res){ console.log(res); return res.text(); })
	.then(function(data){
	 	console.log( data );
	});
	
});