import {useState, useEffect} from 'react';
import paginate from "./utils";

export const useFetch = () => {

    const [showPagination, setShowPagination] = useState(true);
    const [paginatedBooks, setPaginatedBooks] = useState([]);
    const [page, setPage] = useState(0);


    const getBooks = () => {
        // const response = paginate(books);
        // setPaginatedBooks(response)
    }

    // useEffect(() => {
    //     getBooks();
    // }, []);




    return {
        showPagination,
        setShowPagination,
        page,
        setPage,
        paginatedBooks,
    }
}