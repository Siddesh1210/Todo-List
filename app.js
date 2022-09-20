var load=document.getElementById('loading');
function func(){
    load.style.display='none';
}
let msg=document.getElementById('success-msg');
msg.classList.add('d-none');
let x;
function add(){
    let task_name=document.getElementById('task').value;
    msg.classList.add('success');
    msg.classList.remove('d-none');
       setTimeout(()=>{
            msg.classList.add('d-none');
            msg.classList.remove('success');
       },3000)
    document.getElementById('task').value="";
    document.getElementById('task-head').innerHTML="Your Task";
    document.getElementById('task-head').classList.add('task-heading');
    let child=document.getElementById('list-task');
    let div=document.createElement('div');
    child.appendChild(div);
    div.classList.add('task-list');
    let checkbox=document.createElement('input');
    checkbox.type='checkbox';
    let para=document.createElement('p');
    div.appendChild(checkbox);
    div.appendChild(para);
    checkbox.classList.add('check');
    para.classList.add('tasks');
    para.innerHTML=task_name;

}