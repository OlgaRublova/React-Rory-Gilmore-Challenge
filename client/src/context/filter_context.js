import React, {useContext, useReducer, useEffect} from 'react';
import reducer from "../reducer/filter_reducer"
import axios from "axios";


const initialState = {
    all_books: [],
    filtered_books: [],
    sort: "page-highest",
    filters: {
        genre: "all",
        pulitzer_prize: false,
        book_size: "ALL"
    },
}

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchBooks = async () => {
            await axios
                .get("http://localhost:8000/books")
                .then(res => {
                   const books =  res.data;
                    dispatch({type: "LOAD_BOOKS", payload: books})
                })
        }
        fetchBooks();

    }, [])


    useEffect(() => {
        dispatch({type: "SORT_BOOKS"})
        dispatch({type: "FILTER_BOOKS"})
    }, [state.sort, state.filters])




    const updateSort = (e) =>{
        const value = e.target.value;
        dispatch({type: "UPDATE_SORT", payload: value})
    }

    const updateFilters = e => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "genre") {
            value = e.target.textContent;
        }

        if (name === "pulitzer_prize") {
            value = e.target.checked;
        }
        if (name === "book_size") {
            value = e.target.textContent;
        }

        dispatch({type: "UPDATE_FILTERS", payload: {name, value}})
    }


    const findBook = (searchItem) => {
        if (searchItem) {
            const books = [...state.all_books];
            dispatch({type: "FIND_BOOK", payload: {searchItem, books}})
        }
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort, updateFilters,
            findBook,
        }}>
            {children}
        </FilterContext.Provider>
    )
}


// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}