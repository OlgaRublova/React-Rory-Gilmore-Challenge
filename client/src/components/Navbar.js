import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {BsMoon, BsSun, GrLogout} from "react-icons/all";

import navbarContainerLinks from "../helpers/links"
import logo from "../assets/logo.jpeg"

import {useGlobalContext} from "../context/global_context";
import {useUserContext} from "../context/user_context";

const Navbar = () => {
    const {theme, toggleTheme} = useGlobalContext();
    const {user, LoginOut} = useUserContext();
    console.log(user)

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (

        <section className={isScrolled ? "navbar-container scrolled" : "navbar-container"}>
            <div className="navbar-container__logo">
                <Link to="/">
                    <img src={logo} alt="olga's icon"/>
                </Link>
            </div>

            <ul className="navbarContainerLinks">
                {navbarContainerLinks.map((link) => {
                    const {id, title, url, icon} = link;
                    return (
                        <li key={id}>
                            <Link className="navbarContainerLinks__link" to={url}> {icon} {title}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className="navbar-container__user">
                <img src={user.user.profilePicture} alt=""/>
                <h1>Welcome, {user.user.username}!</h1>
            </div>

            <button
                className="navbar-container__theme"
                onClick={toggleTheme}>
                {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
            </button>

            <button className="navbar-container__logout" onClick={LoginOut}>
                <Link to="/login">
                    <GrLogout/>
                </Link>
            </button>


        </section>

    )
}


export default Navbar