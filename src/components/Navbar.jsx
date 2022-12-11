import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  }
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
        {/* <Link to="/logout" className={styles.link}>
          Logout
        </Link> */}
        <Link to="/profile" className={styles.link}>
          Profile
        </Link>
        {auth ? (
          <Link onClick={logout} to="/signup" className={styles.link}>
            Logout
          </Link>
        ) : (
          <Link to="/signup" className={styles.link}>
            Sign Up
          </Link>
        )}
        
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </div>
    );
}

export default Navbar;