import React from "react";
import style from "../style/navbar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.wrapper} ${style.nav}`}>
        <Link to="/">
          <img src={logo} alt="Logo" className={style.navLogo} />
        </Link>

        <div className={style.navLinks}>
          <Link to="/products" className={style.links}>
            Products
          </Link>
          <Link to="/client" className={style.links}>
            Client
          </Link>
          <Link to="/about" className={style.links}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
