import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Navbar() {
    const [click, setClick] = React.useState(true);
    const toggleMenu = () => {
        const mobileNav = document.getElementById("mobileNav");
        setClick(!click);
        if (click) {
            mobileNav.classList.add("nav-in");
        } else {
            mobileNav.classList.remove("nav-in");
        }
    };

    return (
        <>
            <div id="menubar" className="container-fluid fixed-top header">
                <div className="container menu-bar">
                    <div
                        className="mobile-nav-toggle"
                        id="menuToggler"
                        onClick={toggleMenu}
                    >
                        <i className="bx bx-menu"></i>
                    </div>

                    <NavLink to="/" className="logo-container">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <p className="logo-text">Factify</p>
                        </div>
                    </NavLink>
                    <div className="navbar">
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-active" : ''} to="home">
                                Home
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-active" : ''} to="about">
                                Abouts
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-active" : ''} to="features">
                                App Features
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-active" : ''} to="contact">
                                Contacts
                            </NavLink>
                        </div>
                    </div>
                    <div className="mobile-navbar" id="mobileNav">
                        <div
                            className="view-nav-toggle"
                            id="menuToggler"
                            onClick={toggleMenu}
                        >
                            <i className="bx bx-menu"></i>
                        </div>

                        <NavLink to="/" className="logo-container">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <p className="logo-text">Factify</p>
                            </div>
                        </NavLink>
                        <p className="version">V 1.0.0</p>
                        <hr />
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "mobile-active" : ''} to="home">
                                <i className="bx bx-home-alt"></i>Home
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "mobile-active" : ''} to="about">
                                <i className="bx bx-id-card"></i> Abouts
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "mobile-active" : ''} to="features">
                                <i className="bx bx-category-alt"></i> App Features
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "mobile-active" : ''} to="contact">
                                <i className="bx bxs-envelope"></i> Contacts
                            </NavLink>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>);
}
