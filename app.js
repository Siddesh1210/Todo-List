var load=document.getElementById('loading');
let msg=document.getElementById('success-msg');
msg.classList.add('d-none');
let x,arr=[];
let temp=0;
function func(){
    load.style.display='none';
}
function add(){
    let task_name=document.getElementById('task').value;
    check=task_name.toLowerCase();
    //Checking value already exist or not
    for(let i=0;i<arr.length;i++){
        if(arr[i]==check){
            temp=1;
            msg.innerHTML="Same task already exist"
            msg.classList.add('error');
            msg.classList.remove('d-none');
            document.getElementById('task').value="";

       setTimeout(()=>{
            msg.classList.add('d-none');
            msg.classList.remove('error');
       },3000);
       break;
        }
        else{
            temp=0;
        }
    }

    if(task_name.length<3){
        // console.log('The length is less than 3');
        msg.innerHTML="Task must be of atleast length 3"
        msg.classList.add('error');
        msg.classList.remove('d-none');
        document.getElementById('task').value="";

       setTimeout(()=>{
            msg.classList.add('d-none');
            msg.classList.remove('error');
       },3000)
    }
    
    else if(task_name.length>=3 && temp==0)
    {
    msg.classList.add('success');
    msg.classList.remove('d-none');
    msg.innerHTML="Task added sucessfully!!!";
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
    arr.push(check);
    console.log(arr);
    }

}