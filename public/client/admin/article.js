let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let name=document.querySelector('#add-article #name');
	let category=document.querySelector('#add-article #category');
	let image=document.querySelector('#add-article #image');
	let message = CKEDITOR.instances['message'].getData();
	
	//console.log(strPost);
	
	let formData = new FormData();
	formData.append( "name",name);
	formData.append( "category",category);
	formData.append( "image",image);
	formData.append( "message",message);

	fetch("/api/article/", {
    	method: "POST",
    	body: formData
	})
	.then(function(res){ console.log(res); return res.text(); })
	.then(function(data){
	 	console.log( data );
	});
	
});