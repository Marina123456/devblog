function init(){
    fetch('/api/posts')
    .then(res => res.json())
    .then(json => console.log(json));
    
    let newTr=document.createElement('tr');
    let newTd=document.createElement('tr');
    newTr.appendChild(newTd);
    let newText=document.createTextNode('текст, который смог');
    newTd.appendChild(newText);
    document.querySelector('.table tbody').appendChild(newTr);
    
}

init();
