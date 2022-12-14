import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
    const handleData = async() => {
      console.log(name, email, password);
      let result = await fetch("http://localhost:4000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type":"application/json"
        }
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
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