let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let strPost=$('#add-article').serialize();
	let editorData = $('#editor1').val();
	strPost+=editorData;
	alert(strPost);
});