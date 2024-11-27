import { useState } from 'react'
import { tasks } from "./assets/data/tasks";
import './App.css'


const currentTask = tasks.filter(
  (task) => task.state === "backlog" || task.state === "in_progress"
);

const currentTaskNum = currentTask.length;

const completedTask = tasks.filter(
  (task) => task.state === "completed"
)

const completedTaskNum = completedTask.length;

function App() {
  return (
    <>
      <h1>Task Manager</h1>
      <div className='container'>


      </div>
    </>
  );













}
console.log(tasks)
export default App
