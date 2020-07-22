const addItems = document.getElementById('addForm');
const userList = document.getElementById('items');
const filItems = document.getElementById('filter');



addItems.addEventListener('submit',addItem);
userList.addEventListener('click',remBtn);
filItems.addEventListener('keyup',filterItem);

function addItem(e){
    e.preventDefault();
    const text = document.getElementById('item').value;
    const li= document.createElement('li');
    li.className='list-group-item';
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);
    const btn =document.createElement('button');
    btn.className= "butn delete";
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    userList.appendChild(li);
}
function remBtn(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const li =e.target.parentElement;
            userList.removeChild(li);
        }
    }    
}
function filterItem(e){
    const filter = e.target.value.toLowerCase();
    const items  = document.getElementsByTagName('li');
    
    Array.from(items).forEach(function(element){
        const item = element.firstChild.textContent;
         
        if(item.toLocaleLowerCase().indexOf(filter)!= -1){//if its not a match then equal to -1 & (!=-1 means it match)
            element.style.display='block';
        }else{
            element.style.display='none';
        }
    })
}