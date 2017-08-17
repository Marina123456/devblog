let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let strPost=$('#add-article').serialize();
	let editorData = CKEDITOR.instances['editor1'].getData();
	strPost+=editorData;
	alert(strPost);
});