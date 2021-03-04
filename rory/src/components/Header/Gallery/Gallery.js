import React, {Component} from "react";

const Gallery = ({urls}) => {
    return (
        <section className="header-img-box">
            {urls.map((url => {
                return <img src={url} alt='Rory is reading'/>
            }))}
        </section>
    )
}


export default Gallery;
