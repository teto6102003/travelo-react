import React, { useState } from 'react';
import FormLogo from "../FormLogo/FormLogo"; 
import './SignUpForm.css'
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (email !== confirmEmail) {
      alert("Emails do not match");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = {
      fName,
      lName,
      email,
      phone,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log("User registered:", data);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/userProfile/" + email);

    } catch (error) {
      console.error("Error:", error);
      alert("There was an error with your registration");
    }
  }

  return (
    <div className='display-center'>
      <form name="signUp-form" id="signUp-form" onSubmit={handleSubmit}>
        <FormLogo />
        <div className='form-input'>
          <input 
            type="text" 
            name="fname" 
            placeholder="First name" 
            value={fName} 
            onChange={(e) => setFName(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            name="lname" 
            placeholder="Last name" 
            value={lName} 
            onChange={(e) => setLName(e.target.value)} 
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone: 01xxxxxxxxx" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="email"
            name="confirm-email"
            placeholder="Confirm E-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
