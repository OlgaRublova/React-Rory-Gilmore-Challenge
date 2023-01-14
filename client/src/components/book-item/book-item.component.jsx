import React from 'react';
import "./book-item.styles.scss"


const BookItemComponent = ({singleBook}) => {
    let {title, cover, firstName, lastName, genre, page} = singleBook;

    return (
        <div className="book">
            <img className="book__cover" src={cover} alt={title}/>
            <div className="book__info">
                <div className="book__info--names">
                    <div className="book__info__item--name">Author:</div>
                    <div className="book__info__item--name">Title:</div>
                    <div className="book__info__item--name">Genre:</div>
                    <div className="book__info__item--name">Pages:</div>
                </div>
                <div className="book__info--values">
                    <div className="book__info__item--value">{firstName} {lastName}</div>
                    <div className="book__info__item--value">{title}</div>
                    <div className="book__info__item--value">{genre}</div>
                    <div className="book__info__item--value">{page} pages</div>
                </div>
            </div>
        </div>)
};

export default BookItemComponent;


