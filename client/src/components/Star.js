import ReactStars from "react-rating-stars-component";
import React from "react";


const Star = () => {
    return (
        <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
        />
    );
};

export default Star;

