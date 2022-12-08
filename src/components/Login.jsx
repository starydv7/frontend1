import React, { useState } from 'react';
import styles from "./signup.module.css";
const Login = () => {
      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async() => {
      let result = await fetch("http://localhost:4000/login", {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": 'application/json'
        }
      });
      result = await result.json();
      console.log(result);
    }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter Email..."
        className={styles.inputbox}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Enter Password..."
        className={styles.inputbox}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
          <button className={styles.btntag} onClick={ handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;