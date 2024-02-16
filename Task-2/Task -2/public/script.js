function addTask() {
    var taskInput = document.getElementById("taskInput");
    var todoList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeTask(newTask);
        };
        
        newTask.appendChild(removeButton);
        todoList.appendChild(newTask);
        
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(task) {
    var todoList = document.getElementById("taksList");
    todoList.removeChild(task);
}

function getCurrentDate() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
        return formattedDate;
}

   
function getCurrentDate() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
        return formattedDate;
}

  
    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            const todoList = document.getElementById("todoList");
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            todoList.appendChild(listItem);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }


    function updateDateTime() {
        document.getElementById("currentDate").textContent = getCurrentDate();
        document.getElementById("currentTime").textContent = getCurrentTime();
    }
    
    
    updateDateTime();
    

    setInterval(updateDateTime, 1000);