import React, { useState } from "react";
import "./Login.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const loginChecking = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(matchedUser));
      localStorage.setItem("userLogin", "true");
      setUserLogin(true);
      navigate("/layout");
    } else {
      alert("Enter correct credentials");
    }
  };

  return (
    <div className="login-container" id="loginContainer">
      <form className="login-form" id="loginForm" onSubmit={loginChecking}>
        <h1 className="login-title">Login Form</h1>

        <label htmlFor="emailInput" className="login-label">Email</label>
        <input
          id="emailInput"
          className="login-input"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="passwordInput" className="login-label">Password</label>
        <input
          id="passwordInput"
          className="login-input"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-button" id="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
