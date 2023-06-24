import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "../../styles/register.css";
import { registerAction } from "../../actions/userAction";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if(email && password && username) {
        dispatch(registerAction(email, password, username ))
    }
  }

  const { register, error } = useSelector((state) => {
    return state.userRegister
  })

  useEffect(() => {
    if(register) navigate('/login')
  }, [register])

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p> }
        <label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
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
        <button type="submit" className="register-btn">Register</button>
        <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span></p>
      </form>
    </div>
  );
};
