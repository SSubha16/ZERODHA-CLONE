import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup() {
  // State to handle input
  let [input, setInput] = useState("");

  // useNavigate hook to handle redirection
  const navigate = useNavigate();

  // Handle input change
  let handleChange = (evt) => {
    setInput(evt.target.value);
  };

  // Handle form submission
  let handleSubmit = (evt) => {
    evt.preventDefault();

    // Clear input field
    setInput("");

    // Redirect to dashboard after submitting the form
    navigate("/dashboard"); // This will now redirect to the /dashboard route
  };

  return (
    <div className='container'>
      <div className='row '>
        <div className='col-7 p-5 mt-5'>
          <img src='media/images/signup.png' style={{ width: "95%" }} alt="Signup Illustration" />
        </div>

        <div className='col-5 p-5 mt-5'>
          <h1>Signup now</h1>
          <h6 className='text-muted mt-3 mb-3'>Or track your existing application.</h6>

          <form onSubmit={handleSubmit}>
            <TextField
              id="social"
              label="Email/Number"
              variant="outlined"
              value={input}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <p className='text-muted mt-3'>
              You will receive an OTP on your number/email.
            </p>
            <Button variant="contained" type="submit" fullWidth>
              Continue
            </Button>
          </form>

          <br />
          <a href="/" style={{ textDecoration: "none" }}>
            Want to open an NRI account?
          </a>
        </div>
      </div>
      <div className='row text-muted text-center mb-5'>
        <p>I authorize Zerodha to contact me even if my number is registered on DND. I authorize to fetch my KYC information from the C-KYC registry with my PAN.</p>
        <p>Please visit this article to know more.</p>
        <p className='mb-5'>
          If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
        </p>
      </div>
    </div>
  );
}

export default Signup;