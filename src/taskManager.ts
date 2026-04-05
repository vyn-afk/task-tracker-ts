import { Task } from "./types.js";

let tasks: Task[] = [];

export function getTasks() {
  return tasks;
}

export function addTask(text: string) {
  const newTask: Task = {
    id: crypto.randomUUID(),
    text,
    completed: false,
  };

  tasks.push(newTask);
}