let pageArticles=document.querySelector('body');
pageArticles.addEventListener('load', function(){
    let newTr=document.createElement('tr');
    let newTd=newTr.createElement('tr');
    newTd.createTextNode('текст, который смог')
    document.querySelector('.table tbody').appendChild(newTr);
    alert('ok');
});
