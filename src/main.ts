import { addTask } from "./taskManager.js";
import { renderTasks } from "./dom.js";

const input = document.getElementById("taskInput") as HTMLInputElement;
const button = document.getElementById("addBtn")!;

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) return;

  addTask(text);
  renderTasks();

  input.value = "";
})