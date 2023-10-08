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
        <section className='h-full container flex flex-col justify-center mx-auto space-y-10'>
          <h1 className='text-5xl text-red'>Volunté</h1>
          
          <div className="flex flex-col py-4 items-stretch space-y-7 mx-auto text-xl">
            <label className="flex flex-row place-content-between space-x-2">
              <div >Username:</div>
              <input value={usernameT} onChange={e => setUsernameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between space-x-2'>
              <div>Password:</div>
              <input value={passwordT} onChange={e => setPasswordT(e.target.value)} />
            </label>
          </div>

          <div className='flex flex-row space-x-4 text-xl'>
              <button className='p-3 w-1/2 border-2 rounded-full hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginButton}>
                <div className=''>
                  Log in
                </div>
              </button>
              <button className='p-3 w-1/2 border-2 rounded-full hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginRegisterSwap}>
                <div className=''>
                  Register
                </div>
              </button>
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

    const [dataT, setDataT] = useState('')
    $.get("/eventsList", function(data){ setDataT(data) },"json");

    const listOfEvents = () => {
      const rows = dataT.map((event, index) => (
        <div
          key={index}
          className="card col-5 text-white bg-dark mb-4"
          style={{ maxWidth: "rem" }}
        >
          <div className="card-header card border-danger mb-3">{event.eventName}</div>
          <div className="card-body">
            <p className="card-text">Description : {event.description}</p>
            <p className="card-title">Time / Date : {event.timeRange}</p>
            <p className="card-text">Location : {event.location}</p>
          </div>
        </div>
      ));
      return rows;
    };

    return (
      <>
        <h1>Upcoming Events</h1>

        <div>
          {listOfEvents}
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
