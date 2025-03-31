// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }
    
    var li = document.createElement("li");
    
    var checkboxContainer = document.createElement("div");
    checkboxContainer.className = "checkbox-container";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    };
    checkboxContainer.appendChild(checkbox);
    
    var textContainer = document.createElement("div");
    textContainer.className = "text-container";
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    textContainer.appendChild(taskText);
    
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    buttonContainer.appendChild(deleteBtn);
    
    li.appendChild(checkboxContainer);
    li.appendChild(textContainer);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);
    
    taskInput.value = "";
}
