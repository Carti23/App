import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

function Navbar(){
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/users-list" className="nav__brand">
        Task
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/create-user" className="nav__link">
            Add User
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/groups" className="nav__link">
            Groups
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/users-list" className="nav__link">
            Users
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/create-group" className="nav__link">
            Add Group
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;