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
        <h3>Current task ({currentTaskNum})</h3>



        {currentTask.map((task, index) => {
          return (
            <ul key={index}>
              <li>{task.title}</li>
              <li>priority: {task.priority}</li>
              <li>Est. time: {task.estimatedTime}</li>

            </ul>
          );
        })}
        <hr />
        <h3>Completed Task ({completedTaskNum})</h3>

        {completedTask.map((task, index) => {
          return (
            <ul key={index}>
              <li>{task.title}</li>
              <li>priority:{task.priority}</li>
              <li>Est. time: {task.estimatedTime}</li>
              <li>state: {task.state}</li>
            </ul>
          )


        })}


      </div>
    </>
  );













}
console.log(tasks)
export default App
