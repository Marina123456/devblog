function init(){
    let newTr=document.createElement('tr');
    let newTd=document.createElement('tr');
    newTr.appendChild(newTd);
    newTd.createTextNode('текст, который смог')
    document.querySelector('.table tbody').appendChild(newTr);
    alert('ok');
}

init();
