import React, {useState, useContext, useEffect} from "react";
import paginate from "./components/utils";
import booksList from "./components/data";

const AppContext = React.createContext();

const allGenres = ['all', ...new Set(booksList.map((book) => book.genre))];

const AppProvider = ({children}) => {
    const [query, setQuery] = useState("Anna Karenina");
    const [data, setData] = useState(paginate(booksList));
    const [books, setBooks] = useState(data);
    const [genres, setGenres] = useState(allGenres);
    const [page, setPage] = useState(0);


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


    return (
        <AppContext.Provider value={{
            query,
            setQuery,
            books,
            setBooks,
            data,
            genres,
            page,
            setPage,
            prevPage,
            nextPage,
            handlePage,
            filterBooksByGenre
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}