import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <header className="admin-header">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <div className="logo">
          <img
            src={Logo}
            height="37"
            width="37"
            alt="logo"
            style={{ borderRadius: 5 }}
          />
          <p className="logo-text">factify</p>
        </div>
      </header>
    </main>
  );
};

export default Main;