import React from 'react';
import "./book-summary.styles.scss"
import ReactStars from "react-rating-stars-component";


const BookSummaryComponent = ({singleBook, ratingChanged}) => {
    let {title, cover, firstName, lastName} = singleBook;

    return (
        <>

            <div className="book-summary">
                <div className="book-summary__cover">
                    <img src={cover} alt={title}/>
                </div>
                <div>
                    <h2 className="book-summary__title">{title}</h2>
                    <p>by {firstName} {lastName}</p>
                </div>

            </div>

            <p>Overall Rating: </p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                half
            />
        </>
    )
};

export default BookSummaryComponent;


