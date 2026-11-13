let inp = document.getElementById('inp');
let btn = document.getElementById("sub");
let todoList = document.getElementById("TodoList");
let list = JSON.parse(localStorage.getItem("datas")) || [];
let idx=list.length;
const render=()=>{
    for(let i=0;i<list.length;i++){
        todoList.innerHTML += `<li id="${list[i].id}">
            <span class="task">${list[i].text}</span>
            <input type="checkbox" onclick="completed(${list[i].id})" ${list[i].isCompleted ? "checked" : ""}>
            <button class="delete" onclick="del(${list[i].id})">Delete</button>
            </li>`;
        list[i].isCompleted && completed(list[i].id);
    }
}
if(list!=null){
    render();
}
btn.addEventListener("click", (event) => {
    if (inp.value != "") {
        list.push({ id:idx++, text: inp.value, isCompleted: false });
        localStorage.setItem("datas", JSON.stringify(list));
        todoList.innerHTML += `<li id="${list[list.length - 1].id}">
        <span class="task">${inp.value}</span>
        <input type="checkbox" onclick="completed(${list[list.length - 1].id})">
        <button class="delete" onclick="del(${list[list.length - 1].id})">Delete</button>
        </li>`;
        inp.value = "";
    }
});

function completed(id) {
    let temp = document.getElementById(id);
    let taskText = temp.getElementsByClassName("task")[0];
    let checkbox = temp.getElementsByTagName("input")[0];
    // console.log( temp.getElementsByTagName("input"));
    list=list.map(item => {
        if(item.id == id){
            item.isCompleted = checkbox.checked;
        }
        return item;
    });
    localStorage.setItem("datas", JSON.stringify(list));
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "black";
    }
}



function del(id) {
    let temp = document.getElementById(id);
    list=list.filter(item => item.id != id);
    localStorage.setItem("datas", JSON.stringify(list));
    temp.style.display = "none";
}