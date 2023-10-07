import { useState } from 'react'
import './App.css'



function App() {
  const [signedIn, setSignedIn] = useState(false)
  const [needLogin, setNeedLogin] = useState(true)
  const [needRegister, setNeedRegister] = useState(false)
  const [b, setB] = useState(2)

  var page;

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

  function Login() {
    setSignedIn(true);
    setNeedLogin(false);
  }

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

  function Register() {
    setSignedIn(true);
    setNeedRegister(false);
  }

  function LoginRegisterSwap() {
    
    setB(6);
    if (!needLogin) {
    alert('!needLogin');

      setNeedLogin(true);
      setNeedRegister(false);
      setB(4);
    } else {
    alert('needLogin');

      setNeedLogin(false);
      setNeedRegister(true);
      setB(5);
    }
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
      {b}
    </>
  )
}

export default App
