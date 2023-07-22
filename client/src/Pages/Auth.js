import React from 'react'

const Auth = () => {
  return (
    <div className='forms'>
      <Login />
      <Register />
    </div>
  )
}

const Register = () => {
  return(
    <div className="left">
      <div className="contact">
        <form action="">
          <h3>Register</h3>
          <input type="text" placeholder="USERNAME" />
          <input type="text" placeholder="PASSWORD" />
          <button className="submit">REGISTER</button>
        </form>
      </div>
    </div>
  )
}

const Login = () => {
  return(
    <div className="left">
      <div className="contact">
        <form action="">
          <h3>Login</h3>
          <input type="text" placeholder="USERNAME" />
          <input type="text" placeholder="PASSWORD" />
          <button className="submit">login</button>
        </form>
      </div>
    </div>
  )
}



export default Auth;