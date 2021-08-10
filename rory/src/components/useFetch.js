import {useState, useEffect} from 'react';
import paginate from "./utils";
import data from "./data";
import {useGlobalContext} from "../contex";


export const useFetch = () => {

    const [showPagination, setShowPagination] = useState(true);
    const [paginatedBooks, setPaginatedBooks] = useState([]);
    const [books, setBooks] = useState(data);
    const [page, setPage] = useState(0);


    const getBooks = () => {
        const response =  paginate(books);
        setPaginatedBooks(response)
    }

    useEffect(() => {
        getBooks()
    }, []);

    return {showPagination, setShowPagination, page, setPage, paginatedBooks, books, setBooks}
}