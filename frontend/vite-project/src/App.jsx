import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Add/Edit Award
        </h1>
        <div className= "input field">
          <input type="text" name="title" placeholder="Enter title" />
          <input type="text" name="title" placeholder="Description	of	the	award" />
          <input type="text" name="title" placeholder="equirements" />
          <button>
            Submit
          </button>
          <button>
            clear
          </button>
      
        </div>
      </div>
    </>
  )
}

export default App
