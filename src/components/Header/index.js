import React from "react";
import Logo from "./logo1.png";
import "./index.css";

function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Copa logo" />
      </a>
    </nav>
  );
}
export default Header;