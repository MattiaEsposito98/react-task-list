import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tasks'
import tasks from './tasks'

function App() {
  let tasksCompleted = []
  let taskToComplete = []
  tasks.forEach((task) => {
    if (task.state === "completed") {
      tasksCompleted.push(task)
    } else {
      taskToComplete.push(task)
    }
  })

  return (
    <>
      <header className="background-title">
        <h1 className="title"> Task Manager</h1>
      </header>

      {/* Array con stato da completare */}
      <ul className='listToComplete'>
        <h2>Current Tasks ({taskToComplete.length}) </h2>
        {taskToComplete.map((task) => (
          <li key={task.id}>
            <h3>{task.title} <span>{task.state}</span></h3>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>
        ))}
      </ul>

      <br />

      {/* Array con stato completato */}
      <ul>
        <h2>Completed Tasks ({tasksCompleted.length}) </h2>
        {tasksCompleted.map((task) => (
          <li key={task.id}>
            <h3>{task.title} <span>{task.state}</span> </h3>
            <p>Priority: {task.priority}</p>
            <p>Es. time: {task.estimatedTime}</p>
          </li>
        ))}
      </ul>
    </>

  )
}

export default App
