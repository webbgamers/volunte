import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Volunte</h1>

      <div>
        Username: 
        <input name = "Username"/>

      <br/>
      <br/>

        Password: 
        <input name = "Password"/>
      </div>
      <p>
        This login is a work in progress
      </p>
    </>
  )
}

export default App
