import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tasks'
import tasks from './tasks'

function App() {
  let tasksCompleted = []
  tasks.forEach((task) => {
    if (task.state === "completed") {
      tasksCompleted.push(task)
    }
  })
  console.log(tasksCompleted)
  return (
    <>
      <header className="background-title">
        <h1 className="title"> Task Manager</h1>
      </header>


      <ul>
        {tasksCompleted.map((task) => (
          <li key={task.id}>
            <h2>{task.title} </h2>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>
        ))}
      </ul>
    </>

  )
}

export default App
