import { useEffect, useState } from 'react'
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
    /*
    $.get("https://volunte-api-3ehogo776a-uc.a.run.app/login", { email: username, password: password }, function (data, status) {
      if (status == "success") {
        setID(data.id)
        setName(data.name);*/
        setSignedIn(true);
        setNeedLogin(false);
        /* (<p>The user ID is {ID}</p>)
      }
    }, "json");*/
  }

  // Registers
  function Register() {
    /*
    $.get("https://volunte-api-3ehogo776a-uc.a.run.app/register", { email: username, name: name, password: password }, function (data, status) {
      if (status == "success") {
        setID(data.id)*/
        setSignedIn(true);
        setNeedRegister(false);/*
      }
    }, "json");*/
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
          <h1 className='text-6xl'>Volunté</h1>

          <div className="flex flex-col py-4 items-stretch space-y-7 mx-auto text-2xl">
            <label className="flex flex-row place-content-between items-center space-x-2">
              <div>Username:</div>
              <input className='p-2 rounded-md' type='text' value={usernameT} onChange={e => setUsernameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Password:</div>
              <input className='p-2 rounded-md' type="password" value={passwordT} onChange={e => setPasswordT(e.target.value)} />
            </label>
          </div>

          <div className='flex flex-row space-x-4 text-2xl'>
            <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginButton}>
              <div>
                Log in
              </div>
            </button>
            <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginRegisterSwap}>
              <div>
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

    function RegisterButton() {
      setUsername(usernameT);
      setPassword(passwordT);
      setName(nameT);
      Register();
    }

    return (
      <>
        <section className='h-full container flex flex-col justify-center mx-auto space-y-10'>
          <h1 className='text-6xl'>Volunté</h1>

          <div className="flex flex-col py-4 items-stretch space-y-7 mx-auto text-2xl">
            <label className="flex flex-row place-content-between items-center space-x-2">
              <div>Name:</div>
              <input className='p-2 rounded-md' type='text' value={nameT} onChange={e => setNameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Username:</div>
              <input className='p-2 rounded-md' type="text" value={usernameT} onChange={e => setUsernameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Password:</div>
              <input className='p-2 rounded-md' type="password" value={passwordT} onChange={e => setPasswordT(e.target.value)} />
            </label>
          </div>

          <div className='flex flex-row space-x-4 text-2xl'>
            <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginRegisterSwap}>
              <div>
                Log in
              </div>
            </button>
            <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={RegisterButton}>
              <div>
                Register
              </div>
            </button>
          </div>
        </section>
      </>
    )
  }

  // Events page
  function EventsList() {

    const [dataT, setDataT] = useState([])

    useEffect(() => {
      fetch("https://volunte-api-3ehogo776a-uc.a.run.app/events")
        .then(res => res.json())
        .then(data => setDataT(data))
    }, [])


    const listOfEvents = () => {
      const rows = dataT.map((event) => (
        <div
          key={event.id}
          className="card col-5 text-white bg-dark mb-4"
          style={{ maxWidth: "rem" }}
        >
          <div className="card-header card border-danger mb-2">{event.name}</div>
          <div className="card-body">
            {/*<p className="card-text">Description: {event.description}</p>
            <p className="card-title">Time / Date: {event.timeRange}</p>*/}
            <p className="card-text">Address: {event.address}</p>
          </div>
        </div>
      ));
      return rows;
    };

    return (
      <>
        <section className='h-full container flex flex-col justify-center mx-auto space-y-10'>
          <h1 className='text-6xl'>Upcoming Events</h1>

          <div className='text-xl font-bold bg-moon rounded-lg text-eerieBlack border-2 '>
            {listOfEvents()}
          </div>
        </section>
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
        <section className='h-full container flex flex-col justify-center mx-auto space-y-10'>
          <h1 className='text-6xl'>Update User</h1>

          <div className="flex flex-col py-4 items-stretch space-y-7 mx-auto text-2xl">
            <label className="flex flex-row place-content-between items-center space-x-2">
              <div>Name:</div>
              <input className='p-2 rounded-md'type='text'placeholder='.' value={nameT} onChange={e => setNameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Username:</div>
              <input className='p-2 rounded-md' type="text" placeholder='.' value={usernameT} onChange={e => setUsernameT(e.target.value)} />
            </label>
            <label className='flex flex-row place-content-between items-center space-x-2'>
              <div>Password:</div>
              <input className='p-2 rounded-md' type="password" value={passwordT} onChange={e => setPasswordT(e.target.value)} />
            </label>
          </div>

          <div className='flex flex-row space-x-4 text-2xl'>
              <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={LoginRegisterSwap}>
                <div>
                  Cancel
                </div>
              </button>
              <button className='p-4 w-1/2 border-2 rounded-full ease-in-out duration-300 hover:bg-light hover:text-eerieBlack' type="submit" onClick={Register}>
                <div>
                  Update info
                </div>
              </button>
          </div>
        </section>
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
