import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"
import { auth } from "../../firebase";
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // Function to handle user sign-up
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      history.push("/welcome"); // Redirect to welcome page on successful sign-up
    })
  }

  return (
    <div className="container">
      <div className="sign-in-container">
        <form onSubmit={signUp}>
          <h1>Create Account</h1>

          <input 
            type="email" 
            placeholder="Enter your email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <input 
            type="password" 
            placeholder="Enter your password" 
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button type="Submit">Sign Up</button>

        </form>     
      </div>
    </div>
  );
};

export default SignUp;