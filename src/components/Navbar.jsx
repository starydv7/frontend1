import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
const Navbar = () => {
    return (
      <div className={styles.grid}>
        <Link to="/">Home</Link>

        <Link to="/add">Add Products</Link>
        <Link to="/update">Update Products</Link>

      </div>
    );
}

export default Navbar;