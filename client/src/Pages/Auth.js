import React, { useState } from 'react';
import Form from '../Components/Form';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';

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
  // eslint-disable-next-line
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/login", 
        {
          username,
          password
        });
      setCookies("access_token", res.data.token);
      window.localStorage.setItem("userID", res.data.userID);
      console.log(res.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return(
    <Form 
      label="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  )
}



export default Auth;