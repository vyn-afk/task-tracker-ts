import { getTasks } from "./taskManager.js";

export function renderTasks() {
  const list = document.getElementById("taskList")!;
  list.innerHTML = "";

  const tasks = getTasks();

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    list.appendChild(li);
  });
}