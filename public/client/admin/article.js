let buttonFormAdd=document.querySelector('#add-article-but');
buttonFormAdd.addEventListener('click',function(){
	
	let strPost=$('#add-article').serialize();
	alert(strPost);
});