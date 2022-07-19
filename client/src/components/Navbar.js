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
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }


    return (
        <div className={isScrolled ? "navbar-container scrolled" : "navbar-container"}>
            <div className="navbar-container__logo">
                <Link to="/">
                    <img src={logo} alt="olga's icon"/>
                </Link>
            </div>

            <ul className="navbar-container__links">
                {navbarContainerLinks.map((link) => {
                    const {id, title, url, icon} = link;
                    return (
                        <li key={id}>
                            <Link className="navbar-container__links__link" to={url}> {icon} {title}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className="navbar-container__user">
                <img src={user.user.profilePicture || logo} alt=""/>
                <h2>Welcome, {user.user.username}!</h2>
            </div>

            <div className="navbar-container__buttons">
                <div className="navbar-container__buttons--theme" onClick={toggleTheme}>
                    {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
                </div>
                <div className="navbar-container__buttons--logout" onClick={LoginOut}>
                    <Link to="/login"><GrLogout/></Link>
                </div>
            </div>
        </div>
    )
}


export default Navbar