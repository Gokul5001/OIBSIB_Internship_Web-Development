// Get elements from the DOM
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const pendingTasksList = document.querySelector("#pendingTasks ul");
const completedTasksList = document.querySelector("#completedTasks ul");

// Event listener to add a new task
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// Function to create a new task item
function createTaskItem(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add checkbox for completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("completed");
            completedTasksList.appendChild(li);
        } else {
            li.classList.remove("completed");
            pendingTasksList.appendChild(li);
        }
    });

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    return li;
}
            