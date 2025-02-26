let txt = document.getElementById("txt");
let lists = document.getElementById("lists");
let form = document.getElementById("form");

// Load tasks from localStorage when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let item = txt.value.trim(); 
    if (item === "") {
        alert("Please enter a task!");
        return;
    }

    addTask(item); 
    saveTask(item); 
    txt.value = ""; 
});

function addTask(item) {
    let task = document.createElement("li");
    task.textContent = item;

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        lists.removeChild(task); 
        removeTask(item); 
    });


    task.appendChild(deleteBtn);
    lists.appendChild(task);
}


function saveTask(item) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(item);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTask);
}


function removeTask(item) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let updatedTasks = tasks.filter(task => task !== item);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
document.getElementById("clearAll").addEventListener("click", function () {
    localStorage.removeItem("tasks"); 
    lists.innerHTML = ""; 
});
