let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let article={
		name: document.querySelector('#add-article #name');
		category: document.querySelector('#add-article #category');
		image: document.querySelector('#add-article #image');
		message: CKEDITOR.instances['message'].getData();
	}	
	//console.log(strPost);
	
	let formData = new FormData();
	formData.append( "article",article);
	
	fetch("/api/article/", {
    	method: "POST",
    	body: formData
	})
	.then(function(res){ console.log(res); return res.text(); })
	.then(function(data){
	 	console.log( data );
	});
	
});