import React, {useState, useContext, useEffect} from "react";
import paginate from "./components/utils";
import booksList from "./components/data";
import Books from "./components/Books";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

const AppContext = React.createContext();

const allGenres = ['all', ...new Set(booksList.map((book) => book.genre))];

const AppProvider = ({children}) => {
    const [query, setQuery] = useState("Anna Karenina");
    const [data, setData] = useState(paginate(booksList));
    const [books, setBooks] = useState(data);

    const [genres, setGenres] = useState(allGenres);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [answer, setAnswer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = ()=> {
        setIsModalOpen(true)
    }
    const closeModal = ()=> {
        setIsModalOpen(false)
    }

    useEffect(() => {
        setIsLoading(true)
        setBooks(data[page]);
        setIsLoading(false);
        // eslint-disable-next-line
    }, [page]);


    if(isLoading){
        return  <Loading/>
    }
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
        setIsLoading(true);
        if (genre === 'all') {
            setIsLoading(true);
            setBooks(booksList);
            setIsLoading(false);

            return;
        }

        const newBooks = booksList.filter((book) => book.genre === genre);
        setBooks(newBooks);
        setIsLoading(false);
    }

    const removeBook = id => {
        console.log('click')
        let newBooksList = booksList.filter(book => book.id !== id);
        console.log(newBooksList)
        console.log(books)
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
            filterBooksByGenre,
            isLoading,
            setIsLoading,
            removeBook,
            answer,
            setAnswer,
            isModalOpen,
            setIsModalOpen,
            openModal,
            closeModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}