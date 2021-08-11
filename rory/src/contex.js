import React, {useState, useContext, useEffect} from "react";
import booksList from "./components/data";
import {useFetch} from "./components/useFetch";
import paginate from "./components/utils";

const AppContext = React.createContext();

const allGenres = ['all', ...new Set(booksList.map((book) => book.genre))];

console.clear();

const AppProvider = ({children}) => {
    const {
        showPagination,
        setShowPagination,
        paginatedBooks,
        books,
        setBooks,
        page,
        setPage,
    } = useFetch();

    const [genres, setGenres] = useState(allGenres);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalNoOpen, setIsNoModalOpen] = useState(false);
    const [error, setError] = useState({show: false, msg: ""})

    useEffect(() => {
        if (showPagination) return;
        setBooks(paginatedBooks[page]);
    }, [showPagination, page])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false)

    }
    const openNoModal = () => {
        setIsNoModalOpen(true);
    }
    const closeNoModal = () => {
        setIsNoModalOpen(false);

    }


    const handlePage = index => {
        setPage(index);
    }
    const prevPage = () => {
        setPage(oldPage => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = paginatedBooks.length - 1;
            }
            return prevPage;
        })
    }
    const nextPage = () => {
        setPage(oldPage => {
            let nextPage = oldPage + 1;
            if (nextPage > paginatedBooks.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        })
    }

    const filterBooksByGenre = (genre) => {

        if (genre === 'all') {
            setBooks(booksList);
            setShowPagination(false);
            return;
        } else {
            const newBooks = booksList.filter((book) => book.genre === genre);

            if (newBooks.length > 15) {
                setBooks(paginate(newBooks));
                setShowPagination(false)
            } else {
                setBooks(newBooks);
                setShowPagination(true);
            }
        }
    }

    const removeBook = id => {
        return setBooks(books.filter((book) => book.id !== id));
    }

    function toggleError(show = false, msg = "") {
        setError({show, msg})
    }

    return (
        <AppContext.Provider value={{
            genres,
            page, setPage, prevPage, nextPage, handlePage,
            isModalOpen, setIsModalOpen, openModal, closeModal,
            isModalNoOpen, setIsNoModalOpen, openNoModal, closeNoModal,
            error, toggleError,
            books, setBooks, removeBook, filterBooksByGenre,
            paginatedBooks, showPagination, setShowPagination,

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}