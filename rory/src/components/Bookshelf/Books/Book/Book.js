import React from 'react';


let Book = (props) => {
    return (
        <div className="book">
            <img src={props.book.cover} book={props.book} alt={props.book.title} genre={props.book.genre}/>
        </div>
    )
}

export default Book;