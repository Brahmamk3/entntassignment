import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state["users"]);
  const navigate = useNavigate();

  const loginChecking = (e) => {
    e.preventDefault();

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/layouthome");
    } else {
      alert("Enter correct credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginChecking}>
        <h1>Login Form</h1>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
