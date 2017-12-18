function init(){
    fetch('/api/posts')
    .then(res => res.json())
    .then(json => {
        json.forEach(function(item, i, json) {

            console.log(item);
            let newTr=document.createElement('tr');
            let newTd1=document.createElement('td');
            newTr.appendChild(newTd1);
            let newText1=document.createTextNode(item.id);
            newTd1.appendChild(newText1);
            
            let newTd2=document.createElement('td');
            newTr.appendChild(newTd2);
            let newText2=document.createTextNode(item.title);
            newTd2.appendChild(newText2);
            
            let newTd3=document.createElement('td');
            newTr.appendChild(newTd3);
            let newText3=document.createTextNode(item.categories);
            newTd3.appendChild(newText3);
            
            let newTd4=document.createElement('td');
            newTr.appendChild(newTd4);
            let newText4=document.createTextNode(item.content);
            newTd4.appendChild(newText4);
            
            
            document.querySelector('.table tbody').appendChild(newTr);
    });
        
    });
    
    
    
}

init();
