let ul = document.getElementById("todoList");
let text = document.getElementById("newTodo");
let addbutton = document.getElementById("add");


let toogleCheck = function () {
    let li = this.parentNode;
    li.classList.toggle("checked");
};


let deleteTodo = function () {
    let li = this.parentNode;
    li.remove();
};

let addTodo = function(todo){
    
    let li = document.createElement("li");
   
    let checkbox = document.createElement("input");
    checkbox.setAttribute(type, checkbox);
    checkbox.onchange = toogleCheck ;

    let label = document.createElement("label");
    label.innerHTML = todo ;

    let deletebutton = document.createElement("button");
    deletebutton.className = "delete";
    deletebutton.innerHTML = "Delete";
    deletebutton.onclick = deleteTodo ;

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deletebutton);
    ul.appendChild(li);
};



addbutton.onclick = function(){

    if (text.value !== ""){
        addTodo(text.value) ;
        text.value = "" ;
    }
};
