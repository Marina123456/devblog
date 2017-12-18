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
            
            let newTd5=document.createElement('td');
            newTr.appendChild(newTd5);
            newTd5.innerHTML = '<button id="delete_id_" class="btn btn-theme02" onclick="deletePosts('+item.id+')">Удалить статью</button>';
            
            document.querySelector('.table tbody').appendChild(newTr);
    });
        
    });
    
    
    
}

init();
function deletePosts(id){
    
  return fetch('/api/posts', {
    method: 'delete',
    body: 'body=1'
  })
  .then(response => console.log(response.json()));
}

