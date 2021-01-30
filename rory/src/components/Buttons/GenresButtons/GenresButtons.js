import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../../database.json';
import GenreButton from "./GenreButton"
import Books from "../../Bookshelf/Books/Books";
// import Book from "../../Bookshelf/Books/Book/Book"


const GenresButtons = () => {
    let booksList = data.books;
    let genresList = []


    booksList.map(book => (
        genresList.push(book.genre)
    ));

    let uniqueGenresList = [...new Set(genresList)];

    let BooksFilterHandler = (genre) => {
        let list = [];


        if (genre === 'all') {
            JSON.parse(JSON.stringify(data.books))
                .filter(book => true)
                .map(book => list.push(book));
        } else {

            JSON.parse(JSON.stringify(data.books))
                .filter(book => book.genre === genre)
                .map(book => list.push(book));

        }

        ReactDOM.render(
            <Books booksList={list}/>,
            document.getElementById('books-container')
        );


        // list.map(book => {
        //         // return (
        //         //     <div className="books">
        //         //         {/*<Book key={book.title}*/}
        //         //         {/*      src="{book.cover}"*/}
        //         //         {/*      genre={book.genre}*/}
        //         //         {/*      alt={book.title}/>*/}
        //         //     </div>
        //         // )
        //     }
        // )
    }
    let buttons =
        <div className="genres">
            <GenreButton
                key="all"
                onClick={() => BooksFilterHandler('all')}
            >All</GenreButton>
            {uniqueGenresList
                .map(genre =>
                    <GenreButton
                        key={genre}
                        onClick={() => BooksFilterHandler(genre)}
                    >{genre}</GenreButton>
                )
            }
        </div>
    return (
        <div>{buttons}</div>
    )

}
export default GenresButtons;