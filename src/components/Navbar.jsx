import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
const Navbar = () => {
    return (
      <div className={styles.grid}>
        <Link to="/" className={styles.link}>
          Home
        </Link>

        <Link to="/add" className={styles.link}>
          Add Products
        </Link>
        <Link to="/update" className={styles.link}>
          Update Products
        </Link>
        <Link to="/logout" className={styles.link}>
          Logout
        </Link>
        <Link to="/profile" className={styles.link}>
          Profile
        </Link>
        <Link to="/signup" className={styles.link}>
          Sign Up
        </Link>
      </div>
    );
}

export default Navbar;