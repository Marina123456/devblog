let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let strPost=$('#add-article').serialize();
	let editorData = CKEDITOR.instances['message'].getData();
	strPost+=editorData;

	console.log(strPost);
	
	let formData = new FormData();
	formData.append( "json",strPost);

	fetch("/api/article/", {
    	method: "POST",
    	body: formData
	})
	.then(function(res){ console.log(res) return res.json(); })
	.then(function(data){
	 	console.log( data ) 
	});
	
});