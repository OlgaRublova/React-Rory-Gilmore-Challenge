import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {BsMoon, BsSun, GrLogout} from "react-icons/all";
import navbarContainerLinks from "../../helpers/links"
import {useGlobalContext} from "../../context/global_context";
import "./navbar.styles.scss"
import {useAuthContext} from "../../context/auth_context";


const Navbar = () => {
    const {theme, toggleTheme} = useGlobalContext();
    const {user, signOutWithGoogle} = useAuthContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const handleSignOut = async () => {
        try {
            await signOutWithGoogle()
            navigate("/auth");
        } catch (error) {
            console.log(error)

        }
    }

    return (
       user && <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <ul className="navbar__links">

                {navbarContainerLinks.map((link) => {
                    const {id, title, url, icon} = link;
                    return (
                        <li key={id}>
                            <Link className="navbar__links__link" to={url}> {icon} {title}</Link>
                        </li>
                    )
                })}
                <div className="navbar__user">
                    <h3>Welcome, { user?.displayName || user?.user.displayName || "Anonymous"}!</h3>
                </div>
                <div className="navbar__buttons">
                    <div className="navbar__buttons--theme" onClick={toggleTheme}>
                        {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
                    </div>
                    <div className="navbar__buttons--logout" onClick={handleSignOut}>
                        <Link to="/auth"><GrLogout/></Link>
                    </div>
                </div>
            </ul>
        </div>
    )
}


export default Navbar