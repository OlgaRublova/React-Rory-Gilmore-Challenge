import './App.css';
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import urls from "./urls";
import Heading from "./components/Heading";
import booksList from '../src/components/books';
import {useState, useEffect} from "react";
import Genres from "./components/Genres";
import Book from "./components/Book";
import paginate from "./components/utils";
import bookList from "./components/books";

console.clear();
const allGenres = ['all', ...new Set(booksList.map((book) => book.genre))];

function App() {
    const [genres, setGenres] = useState(allGenres);

    const [data, setData] = useState(paginate(bookList));
    const [books, setBooks] = useState(data)
    const [page, setPage] = useState(0);


    useEffect(() => {
        setBooks(data[page])
    }, [page])


    const handlePage = index => {
        setPage(index);
    }

    const filterBooksByGenre = (genre) => {

        if (genre === 'all') {
            setBooks(booksList);

            return;
        }
        const newBooks = booksList.filter((book) => book.genre === genre);
        setBooks(newBooks);
    }


    return (
        <main>
            <Title title="Rory Gilmore Reading Challenge"/>
            <div className="header">
                <Gallery urls={urls}/>
                <Heading/>
            </div>
            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />

            {<div className="btn-container--page">
                <button className="prev-btn">prev</button>
                {
                    data.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`page-btn ${index === page ? 'active-btn' : null}`}
                                onClick={() => {
                                    handlePage(index)
                                }}>
                                {index + 1}
                            </button>
                        )
                    })
                }
                <button className="next-btn">next</button>
            </div>}

            <section className="books-container">
                {books.map(book => {
                    return (
                            <Book key={book.id} {...book}/>
                    )
                })}
            </section>
        </main>
    );
}

export default App;
