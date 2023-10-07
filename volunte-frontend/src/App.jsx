import { useState } from 'react'
import './App.css'



function App() {

  // Variables
  const [signedIn, setSignedIn] = useState(false)
  const [needLogin, setNeedLogin] = useState(true)
  const [needRegister, setNeedRegister] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [ID, setID] = useState('')

  var internalPage = "eventsList"
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

  // Login pa
  function LoginForm() {
    const [usernameT, setUsernameT] = useState('')
    const [passwordT, setPasswordT] = useState('')

    function LoginButton(){
      setUsername(usernameT);
      setPassword(passwordT);
      Login();
    }

    return (
      <>
        <h1>Volunte</h1>

        <div>

          <button onClick={LoginRegisterSwap}>Go to register</button>

          <br />
          <br />

          <label>
            Username:
            <input value={usernameT} onChange={e => setUsernameT(e.target.value)} />
          </label>

          <br />
          <br />

          <label>
            Password:
            <input value={passwordT} onChange={e => setPasswordT(e.target.value)} />
          </label>
        </div>

        <br />
        <br />

        <button type="submit" onClick={LoginButton}>Log in</button>
      </>
    )
  }

  // Register page
  function RegisterForm() {
    return (
      <>
        <h1>Volunte</h1>

        <div>

          <button onClick={LoginRegisterSwap}>Go to login</button>

          <br />
          <br />

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

  // Events page
  function EventsList() {
    return (
      <>
        <h1>Upcoming Events</h1>

        <div>
          List of events goes here
          <br />
          {username}
          <br />
          {password}
          <br />
          What
        </div>
      </>
    )
  }

  // Events page
  function EventInfo() {
    return (
      <>
        <h1>Event info</h1>

        <div>
          Event info goes here
        </div>
      </>
    )
  }

  // Events page
  function userInfo() {
    return (
      <>
        <h1>User Info</h1>

        <div>
          User info goes here
        </div>
      </>
    )
  }

  // Page decider
  if (!signedIn && needLogin) {
    page = <LoginForm />
  } else if (!signedIn && needRegister) {
    page = <RegisterForm />
  } else {
    switch (internalPage) {
      case "eventsList":
        page = <EventsList />
        break;
      case "eventInfo":
        page = <EventInfo />
        break;
      case "userInfo":
        page = <userInfo />
        break;
      default:
        page = <LoginForm />
        break;
    }
  }

  return (
    <>
      {page}
    </>
  )
}

export default App
