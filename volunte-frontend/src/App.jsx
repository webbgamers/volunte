import { useState } from 'react'
import './App.css'

function LoginForm() {
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
      
      <br/>
      <br/>

      <button type="submit">Log in</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App
