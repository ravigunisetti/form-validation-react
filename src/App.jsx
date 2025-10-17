import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    if (!validateEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully");
  };

  const validateForm = () => {
    if (emailError || !email || !password) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  // Validate form when email or password changes
  React.useEffect(() => {
    validateForm();
  }, [email, password, emailError]);

  return (
    <div className="App">
      <h1>Form Validation in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
