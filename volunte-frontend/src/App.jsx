import { useState } from 'react'
import './App.css'



function App() {

  // Variables
  const [signedIn, setSignedIn] = useState(false)
  const [needLogin, setNeedLogin] = useState(true)
  const [needRegister, setNeedRegister] = useState(false)

  var page;

  /***********
  Changing states
  ***********/
  // Logs in
  function Login() {
    setSignedIn(true);
    setNeedLogin(false);
  }

  // Registers
  function Register() {
    setSignedIn(true);
    setNeedRegister(false);
  }

  // Login toggle
  function LoginRegisterSwap() {
    
    if (!needLogin) {
      setNeedLogin(true);
      setNeedRegister(false);
    } else {
      setNeedLogin(false);
      setNeedRegister(true);
    }
  }

  /***********
  Pages
  ***********/

  // Login page
  function LoginForm() {
    return (
      <>
        <h1>Volunte</h1>

        <div>
          Username:
          <input name="Username" />

          <br />
          <br />

          Password:
          <input name="Password" />
        </div>

        <br />
        <br />

        <button type="submit" onClick={Login}>Log in</button>
      </>
    )
  }

  // Register page
  function RegisterForm() {
    return (
      <>
        <h1>Volunte</h1>

        <div>

          First name:
          <input name="First name" />

          <br />
          <br />

          Last name:
          <input name="Last name" />

          <br />
          <br />

          Username:
          <input name="Username" />

          <br />
          <br />

          Password:
          <input name="Password" />

          <br />
          <br />

          Re-enter Password:
          <input name="Password" />
        </div>

        <br />
        <br />

        <button type="submit" onClick={Register}>Register</button>
      </>
    )
  }

  if (!signedIn && needLogin) {
    page = <LoginForm />
  } else if (!signedIn && needRegister) {
    page = <RegisterForm />
  }

  return (
    <>
      <button onClick={LoginRegisterSwap}>Swap</button>
      {page}
      {needLogin}
    </>
  )
}

export default App
