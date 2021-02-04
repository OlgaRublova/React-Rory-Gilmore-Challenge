import React from 'react';


let Book = ({ cover, title, genre }) => {
    return (
        <div className="book">
            <img src={cover}
                 alt={title}
                 genre={genre}/>
        </div>
    )
}

export default Book;