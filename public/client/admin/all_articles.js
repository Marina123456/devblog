function init(){
    let newTr=document.createElement('tr');
    let newTd=document.createElement('tr');
    newTr.appendChild(newTd);
    let newText=document.createTextNode('текст, который смог');
    newTd.appendChild(newText);
    document.querySelector('.table tbody').appendChild(newTr);
    alert('ok');
}

init();
