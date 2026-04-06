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

export function deleteTask(id: string) {
  /*
    * Deletes a task by filtering out the task with the given id from the tasks array
    * The filter method creates a new array with all tasks except the one with the matching id
  */
  tasks = tasks.filter(task => task.id !== id);
}

export function toggleTask(id: string) {
  tasks = tasks.map(task => 
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
}