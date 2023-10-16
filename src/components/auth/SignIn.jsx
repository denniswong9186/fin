import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"
import { auth } from "../../firebase";
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      history.push("/welcome"); // Redirect to welcome page on successful sign-in
    })
  }

  return (
    <div className="container">
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <h1>Welcome to Quantum Wealth Strategies!</h1>
          <h2>We are dedicated to offering secured and professional financial services to our clients.</h2>
          <h3>Log in to your account</h3>

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
                        <button type="Submit" style={{ marginTop: '20px', borderRadius: '50px', padding: '10px 20px', background: 'white', fontSize: '16px', fontWeight: 'bold' }}>
            Log In
          </button>
          
          <p>For testing purposes, you can use the following credentials:<br />
            <strong>Email:</strong> test@test.com<br />
            <strong>Password:</strong> test123456<br />
            <strong>Dennis:</strong> This is a dummy account for user authorization.
          </p>
    
          <p> </p>
          <p> </p>
          <h1> </h1>

        </form>     
      </div>
    </div>
  );
};

export default SignIn
