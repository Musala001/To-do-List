let txt = document.getElementById("txt");
let lists = document.getElementById("lists");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let item = txt.value.trim(); 

    if (item === "") {
        alert("You submitted an empty form!!");
        return;
    }

    let task = document.createElement("li");
    task.textContent = item;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "red";
    deleteBtn.style.backgroundColor = "black";

    deleteBtn.addEventListener("click", function () {
        lists.removeChild(task); 
    });

    task.appendChild(deleteBtn);
    lists.appendChild(task);
    txt.value = ""; 
});
