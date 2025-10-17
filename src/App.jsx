import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordIsValid = password.length >= 8;

  const formIsValid = emailIsValid && passwordIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);
    if (!formIsValid) return;

    alert("Form submitted successfully!");
    setEmail("");
    setPassword("");
    setEmailTouched(false);
    setPasswordTouched(false);
  };

  return (
    <div className="app">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h1 className="title">Sign In</h1>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`input ${emailTouched && !emailIsValid ? "invalid" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          placeholder="you@example.com"
        />
        {emailTouched && !emailIsValid && (
          <div className="error">Please enter a valid email address.</div>
        )}

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={`input ${
            passwordTouched && !passwordIsValid ? "invalid" : ""
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          placeholder="At least 8 characters"
        />
        {passwordTouched && !passwordIsValid && (
          <div className="error">Password must be at least 8 characters.</div>
        )}

        <button type="submit" className="submit" disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
