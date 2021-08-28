import React, {useContext, useReducer, useEffect, useState} from 'react';
import reducer from "../reducer/filter_reducer"
import {useBooksContext} from "./books_context";


const initialState = {
    filtered_books: [],
    genres: [],
    genre: "all",
    paginated_books: [],
    sort: "page-lowest",
    grid_view: false,
    error: {
        show: false,
        msg: ""
    },
    filters: {
        min_length: 0,
        max_length: 0,
    },
    page: 0,
    showPagination: false,
    pagination: false

}

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
    const {books} = useBooksContext();

    const [state, dispatch] = useReducer(reducer, initialState)
    const [main, setMain] = useState("all")


    useEffect(() => {
        let allGenres = ['all', ...new Set(books.map((book) => book.genre))];
        dispatch({type: "LOAD_GENRES", payload: allGenres}) // Generates genres buttons

        dispatch({type: "LOAD_BOOKS", payload: books})      // Generates books

    }, [books])




    useEffect(() => {
        dispatch({type: "FILTER_BOOKS"})
        dispatch({type: "SORT_BOOKS"})
    }, [books, state.sort, state.filters])


    const updateSort = (e) => {
        const value = e.target.value;
        dispatch({type: "UPDATE_SORT", payload: value})
    }
    const updateFilters = e => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({type: "UPDATE_FILTERS", payload: {name, value}})
    }

    const filterBooksByGenre = (genre) => {
        setMain(genre)
        dispatch({type: "FILTER_BY_GENRE", payload: {genre, books} })

    }


    const removeBook = id => {
        dispatch({type: "REMOVE_BOOK", payload: id})
    }

    const findBook = (searchItem) => {
        if (searchItem) {
            dispatch({type: "FIND_BOOK", payload: {searchItem, books}})
            toggleError(true, "That's what we found")
        }
    }


    function toggleError(show = false, msg = "") {
        dispatch({type: "TOGGLE_ERROR", payload: {show, msg}})
    }

    const handlePage = index => {
        dispatch({type: "SET_INDEX", payload: index})
    }
    const prevPage = () => {
        dispatch({type: "SET_PREV_BOOK", payload: state.page})
    }
    const nextPage = () => {
        dispatch({type: "SET_NEXT_BOOK", payload: state.page})
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort, updateFilters, filterBooksByGenre,
            removeBook, findBook,
            toggleError,
            main,

            prevPage, nextPage, handlePage,


        }}>
            {children}
        </FilterContext.Provider>
    )
}


// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}