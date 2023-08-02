document.addEventListener("DOMContentLoaded", () => {
    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
  
    tasks.forEach((taskText) => {
      const li = createTaskElement(taskText);
      taskList.appendChild(li);
    });
  
    // Add task button event listener
    const addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener("click", addTask);
  });
  
  // Function to create a new task element
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="cutTask(this)"><i class="fas fa-cut"></i></button>
      <button onclick="deleteTask(this)"><i class="fas fa-times"></i></button>
    `;
    return li;
  }
  
  
  // Function to add a new task to the list
  function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a valid task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  
    // Save tasks to local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    taskInput.value = "";
  }
  
  // Function to cut a task
  function cutTask(button) {
    const li = button.parentElement;
    li.classList.toggle("completed");
  }
  
  
  // Function to delete a task
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  
    // Remove the task from local storage
    const taskText = li.querySelector("span").textContent;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  