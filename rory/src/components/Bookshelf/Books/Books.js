import React from 'react';
import Book from './Book/Book'


function Books({booksList}){
    const books =
        <div className="books">
            {
                booksList.map((book,title) => (
                        <Book key={title} {...book}/>
                    )
                )
            }

        </div>


    return (
        <div>{books}</div>
    )
}

export default Books;