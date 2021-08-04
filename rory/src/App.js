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

const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme;
}

function App() {
    const [genres, setGenres] = useState(allGenres);
    const [data, setData] = useState(paginate(bookList));
    const [books, setBooks] = useState(data)
    const [page, setPage] = useState(0);
    const [theme, setTheme] = useState(getStorageTheme());


    useEffect(() => {
        setBooks(data[page])
        // eslint-disable-next-line
    }, [page]);


    const handlePage = index => {
        setPage(index);
    }
    const prevPage = () => {
        setPage(oldPage => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        })
    }
    const nextPage = () => {
        setPage(oldPage => {
            let nextPage = oldPage + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        })
    }

    const filterBooksByGenre = (genre) => {

        if (genre === 'all') {
            setBooks(booksList);

            return;
        }
        const newBooks = booksList.filter((book) => book.genre === genre);
        setBooks(newBooks);
    }

    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme")
        } else {
            setTheme("light-theme")
        }
    }


    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);

    }, [theme])


    return (
        <main>
            <Title title="Rory Gilmore Reading Challenge"/>
            <div className="header">
                <Gallery urls={urls} toggleTheme={toggleTheme} theme={theme}/>
                <Heading/>
            </div>
            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />

            {<div className="btn-container--page">
                <button className="prev-btn" onClick={prevPage}>prev</button>
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
                <button className="next-btn" onClick={nextPage}>next</button>
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
