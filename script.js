document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");
    const todoCount = document.getElementById("todoCount");
    const doneCount = document.getElementById("doneCount");

    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        if (taskInput.value.trim() === "") return;

        // Create Task Element
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <span class="task-text">${taskInput.value}</span>
            <div class="actions">
                <span class="check-btn">✔</span>
                <span class="delete-btn">🗑</span>
            </div>
        `;

        // Append to To-Do List
        todoList.appendChild(taskItem);
        updateCount();

        // Add Event Listeners for Actions
        taskItem.querySelector(".check-btn").addEventListener("click", () => completeTask(taskItem));
        taskItem.querySelector(".delete-btn").addEventListener("click", () => removeTask(taskItem));

        taskInput.value = "";
    }

    function completeTask(taskItem) {
        taskItem.classList.add("completed");
        taskItem.querySelector(".check-btn").remove();

        // Move to Done List
        doneList.appendChild(taskItem);
        updateCount();
    }

    function removeTask(taskItem) {
        taskItem.remove();
        updateCount();
    }

    function updateCount() {
        todoCount.textContent = todoList.children.length;
        doneCount.textContent = doneList.children.length;
    }
});
