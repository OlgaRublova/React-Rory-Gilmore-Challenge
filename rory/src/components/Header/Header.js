import React from 'react';
import Gallery from "./Gallery/Gallery";
import Heading from "./Heading/Heading";
//import HeadingButton from "../Buttons/Button/HeadingButton";
import Aux from '../../hoc/Aux';

let urls = [
    "images/header-img-1.jpg",
    "images/header-img-2.jpg",
    "images/header-img-3.jpg",
    "images/header-img-4.jpg",
    "images/header-img-5.png",
    "images/header-img-6.jpg",
    "images/header-img-7.jpg",
    "images/header-img-8.jpg",
    "images/header-img-9.jpg",
]

const Header = () => {

    return (
        <Aux>
            <div className="header">
                <Gallery imageUrls={urls}/>
                <div className="header-text">
                    <Heading/>
                </div>
            </div>
        </Aux>


    )
}

export default Header;