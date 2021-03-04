import React, {useState} from 'react';
import Genres from "./Genres";
import Book from "./Book";
import items from './items';

const allGenres = ['all', ...new Set(items.map((item) => item.genre))];

function Bookshelf() {

    const [bookItems, setBookItems] = useState(items);
    const [genres, setGenres] = useState(allGenres);

    const filterBooks = (genre) => {
        if (genre === 'all') {
            setBookItems(items);
            return;
        }
        const newBooks = items.filter((item) => item.genre === genre);
        setBookItems(newBooks);
    }

    return (
        <main className="book-shelf">
            <Genres
                genres={genres}
                filterBooks={filterBooks}
            />
            <Book books={bookItems}/>
        </main>
    )

}

export default Bookshelf;




