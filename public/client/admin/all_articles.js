function init() {
    let newTr=document.createElement('tr');
    let newTd=newTr.createElement('tr');
    newTd.createTextNode('текст, который смог')
    document.querySelector('.table tbody').appendChild(newLi);
};
$( document ).ready(function() {
  init();
});
