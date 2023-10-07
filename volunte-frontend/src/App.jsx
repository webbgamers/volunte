import { useState } from 'react'
import './App.css'



function App() {

  // Variables
  const [signedIn, setSignedIn] = useState(false)
  const [needLogin, setNeedLogin] = useState(true)
  const [needRegister, setNeedRegister] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
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

    function LoginButton() {
      setUsername(usernameT);
      setPassword(passwordT);
      Login();
    }

    return (
      <>
        <section className='container flex-col mx-auto items-center'>
          <h1 className='text-4xl'>Volunté</h1>

          <div className="flex flex-col p-4 items-center">
            <label className="flex flex-row space-x-3">
              <div >Username:</div>
              <input value={usernameT} onChange={e => setUsernameT(e.target.value)} />
            </label>
            <label className='flex flex-row space-x-3'>
              <div>Password:</div>
              <input value={passwordT} onChange={e => setPasswordT(e.target.value)} />
            </label>
          </div>

          <div className='flex-row space-x-4'>
            <button type="submit" onClick={LoginButton}>Log in</button>
            <button onClick={LoginRegisterSwap}>Register</button>
          </div>
        </section>
      </>
    )
  }

  // Register page
  function RegisterForm() {


    const [usernameT, setUsernameT] = useState('')
    const [passwordT, setPasswordT] = useState('')
    const [nameT, setNameT] = useState('')

    return (
      <>
        <h1>Volunte</h1>

        <div>

          <button onClick={LoginRegisterSwap}>Go to login</button>

          <br />
          <br />

          <label>
            Name:
            <input value={nameT} onChange={e => setNameT(e.target.value)} />
          </label>

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
