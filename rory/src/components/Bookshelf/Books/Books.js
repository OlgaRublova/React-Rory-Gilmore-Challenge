import React from 'react';
import Book from './Book/Book'


function Books({booksList}) {

    const books =
        <div className="books">
            {
                booksList.map(book => (
                        <Book key={book.title} book={book} genre={book.genre}/>
                    )
                )
            }

        </div>


    return (
        <div>{books}</div>
    )
}

export default Books;