import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {BsMoon, BsSun} from "react-icons/all";

import links from "../helpers/links"
import logo from "../assets/logo.jpeg"

import {useGlobalContext} from "../context/global_context";

const Navbar = () => {
    const {theme, toggleTheme} = useGlobalContext();
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <NavContainer>
            <section className={isScrolled ? "nav-center scrolled" : "nav-center"}>
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="olga's icon"/>
                    </Link>
                </div>

                <ul className="nav-links">
                    {links.map((link) => {
                        const {id, title, url, icon} = link;
                        return (
                            <li key={id}>
                                <Link to={url} className="link"> {icon} {title}</Link>
                            </li>
                        )
                    })}
                </ul>

                <button
                    className="theme"
                    onClick={toggleTheme}>
                    {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
                </button>


            </section>
        </NavContainer>
    )
}


const NavContainer = styled.nav`



  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: max-content;
    position: fixed;
    top: 0;
    z-index: 1;
    background: var(--clr-bcg);
    font-size: 14px;


    &.scrolled {
      background-color: var(--clr-btn-hover);

      & .link {
        color: var(--clr-font-primary) !important;

      }
    }


    .theme {
      color: var(--clr-theme-icon);
      font-size: 2.5rem;
      vertical-align: middle;
      border: none;
      background-color: transparent;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      width: 100%;

      li {
        margin: 0 0.5rem;
        font-size: 1rem;
      }

      .link {
        text-transform: capitalize;
        padding: 0 0.5rem;
        text-decoration: none;
        color: var(--clr-active-btn);

        :hover {
          color: var(--clr-btn-question);
        }
      }

      .link svg {
        margin-right: 0.5rem;
        vertical-align: middle;
      }


    }
  }

  .nav-header {
    display: flex;
    align-items: center;

    img {
      height: 4rem;

      object-fit: cover;
      border-radius: 50%;
    }

  }

  @media screen and (max-width: 800px) {

    .nav-links {
      width: 100%;
      padding: 1rem 0;
    }

    .theme, .nav-header {
      display: none;
    }
    .link{
      display: flex;
      flex-direction: column;
    }
  }


`
export default Navbar