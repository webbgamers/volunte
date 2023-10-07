import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  var page;
  var signedIn = false, needLogin = true, needRegister = false;
  var b = 2;

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
    signedIn = true;
    needLogin = false;
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
    signedIn = true;
    needRegister = false;
  }

  function LoginRegisterSwap() {
    
    b = 6;
    if (!needLogin) {
    alert('!needLogin');

      needLogin = true;
      needRegister = false;
      b = 4;
    } else {
    alert('needLogin');

      needLogin = false;
      needRegister = true;
      b = 5;
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
