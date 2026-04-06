import { getTasks, deleteTask } from "./taskManager.js";

export function renderTasks() {
  const list = document.getElementById("taskList")!;
  list.innerHTML = "";

  const tasks = getTasks();

  tasks.forEach(task => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}