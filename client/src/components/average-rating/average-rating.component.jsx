import React from 'react';
import ReactStars from "react-rating-stars-component";
import ButtonComponent from "../button/button.component";
import {useNavigate} from "react-router-dom";
import "./average-rating.styles.scss"


const AverageRatingComponent = ({numRatings, avgRating, bookId}) => {
    const navigate = useNavigate();
    return (
        <div className="average-rating">
            <div>
                <div className="average-rating__number">
                    {avgRating ? avgRating.toFixed(2) : "N/A"}
                </div>
                <div className="average-rating__count">
                    <span>Based on {Number(numRatings) ? Number(numRatings).toFixed(0) : "N/A"} review(s)</span>
                </div>
                <div className="average-rating__star">
                    {
                        avgRating && <ReactStars
                            count={5}
                            value={avgRating}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    }
                </div>
            </div>

            <ButtonComponent buttonType="primary" onClick={() => navigate(`/write/${bookId.id}`)}>Write A
                Review</ButtonComponent>
            <ButtonComponent buttonType="inverted" onClick={() => navigate("/books")}>Go
                Back</ButtonComponent>

        </div>

    );
};

export default AverageRatingComponent;