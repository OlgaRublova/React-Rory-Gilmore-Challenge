import React from 'react';

const Book = ({books}) => {
    return (
        <div className="books-container">
            {
                books.map((book) => {
                    const {id, firstName, lastName, title, genre, page, cover} = book;
                    return (
                        <div key={id} className="book">
                            <img src={cover} alt={title} className="book-img"/>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Book;