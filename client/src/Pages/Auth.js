import React, { useState } from 'react'
import Form from '../Components/Form'
import axios from 'axios'

const Auth = () => {
  return (
    <div className='forms'>
      <Login />
      <Register />
    </div>
  )
}

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", 
      {
        username,
        password
      });
      alert("Registration Completed, Now Login!");
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <Form 
      label="Register"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  )
}

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return(
    <Form 
      label="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  )
}



export default Auth;