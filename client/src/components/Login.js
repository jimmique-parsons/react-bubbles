import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, loginData)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setLoginData({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          value={loginData.username}
        />
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          value={loginData.password}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
