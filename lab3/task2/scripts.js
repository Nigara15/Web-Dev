console.log('JS loaded');
const Taskform=document.getElementById("taskform");
const Taskinput=document.getElementById("taskinput");
const Tasklist=document.getElementById("tasklist");
Taskform.addEventListener("submit",function(event){
    event.preventDefault();
    const Tasktext=Taskinput.value.trim();
    if(Tasktext==='') return;
    const li=document.createElement('li');
    const leftdiv=document.createElement('div');
    leftdiv.classname='task-left';
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    const span=document.createElement('span');
    span.textContent=Tasktext;
    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
            span.classList.add('done');
        }
        else{
            span.classList.remove('done');
        }
    });
    const deletebutton=document.createElement('button');
    deletebutton.textContent='Delete';
    deletebutton.className='delete';
    deletebutton.addEventListener('click',function(){
        Tasklist.removeChild(li);
    });
    leftdiv.appendChild(checkbox);
    leftdiv.appendChild(span);
    li.appendChild(leftdiv);
    li.appendChild(deletebutton);
    Tasklist.appendChild(li);
    Taskinput.value='';
    Taskinput.focus();
    });


