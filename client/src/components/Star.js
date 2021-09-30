import ReactStars from "react-rating-stars-component";
import React  from "react";


const Star = ({ratingsQuantity}) => {

    return (
        <ReactStars
            value={ratingsQuantity}
            count={5}
            size={24}
            activeColor="#ffd700"
            half
        />
    );
};

export default Star;

