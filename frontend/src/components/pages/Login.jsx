import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "../../styles/login.css";
import { loginAction } from "../../actions/userAction";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');

  const { login, error } = useSelector((state) => {
    return state.userLogin
  })
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    console.log("handlesubmit")
    event.preventDefault();
    if(email && password) {
      dispatch(loginAction(email, password))
    }
    // Logic for handling form submission goes here
  }

  useEffect(() => {
    if(localStorage.getItem('userToken')) {
      navigate('/')
    }
  }, [login]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p> }
        <label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="login-btn">Log In</button>
        <p>Don't have an account? <span className="link" onClick={() => navigate('/register')}>Register</span></p>
      </form>
    </div>
  );
};
