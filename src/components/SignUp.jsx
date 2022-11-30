import React from 'react'
import { useState } from 'react';
import styles from "./signup.module.css";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleData = () => {
        console.log(name, email, password);
    }
  return (
    <div className={styles.signupdiv}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter Name..."
        className={styles.inputbox}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
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
      <button className={styles.btntag} onClick={handleData}>Sign Up</button>
    </div>
  );
}

export default SignUp;