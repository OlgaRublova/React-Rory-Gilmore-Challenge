import React, {useContext, useReducer, useEffect} from 'react';
import reducer from "../reducer/filter_reducer"
import {useBooksContext} from "./books_context";


const initialState = {
    filtered_books: [],
    all_books: [],
    grid_view: false,
    sort: "page-lowest",
    error: {
        show: false,
        msg: ""
    },
    filters: {
        min_length: 0,
        max_length: 0,
        pulitzer_prize: false,
        genre: "all",
        book_size: "ALL"
    },
    page: 0,
    showPagination: false,
    pagination: false,
    likes: [],
    checked: [],
}

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
    const {books} = useBooksContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: "LOAD_BOOKS", payload: books})      // Generates books
    }, [books])


    useEffect(() => {
        dispatch({type: "SORT_BOOKS"})
        dispatch({type: "FILTER_BOOKS"})
    }, [books, state.sort, state.filters])

    const updateSort = (e) =>{
        const value = e.target.value;
        dispatch({type: "UPDATE_SORT", payload: value})
    }

    const setGridView = () => {
        dispatch({type: "SET_GRIDVIEW"})
    }
    const setListView = () => {
        dispatch({type: "SET_LISTVIEW"})
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




    const removeBook = id => {
        dispatch({type: "REMOVE_BOOK", payload: id})
    }

    const heartFavoriteHandler = (e, favoriteValue) => {
        console.log("heart")
        console.log(e.target.parentElement)

        e.preventDefault();
        const sessionId = Number(e.target.parentElement.attributes['data-sessionid'].value);
        console.log("sessionId")
        console.log(sessionId)
        let newLikes = state.filtered_books.map((like) => {
            const {id} = like;
            console.log("id: ")
            console.log(id)
            if (id === sessionId) {
                return {...like, favorite: favoriteValue}
            }
            return like;
        })

        dispatch({type: "LIKE_BOOK", payload: newLikes})
    }

    const checkedHandler = (e, checkedValue) => {
        e.preventDefault();
        const sessionId = Number(e.target.parentElement.attributes['data-checked'].value);
        let newChecks = state.filtered_books.map((check) => {
            if (check.id === sessionId) {
                return {...check, checked: checkedValue}
            }
            return check;
        })

        dispatch({type: "CHECK_BOOK", payload: newChecks})
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

    // const handlePage = index => {
    //     dispatch({type: "SET_INDEX", payload: index})
    // }
    // const prevPage = () => {
    //     dispatch({type: "SET_PREV_BOOK", payload: state.page})
    // }
    // const nextPage = () => {
    //     dispatch({type: "SET_NEXT_BOOK", payload: state.page})
    // }

    return (
        <FilterContext.Provider value={{
            ...state,
            setListView, setGridView,
            updateSort, updateFilters,
            removeBook, findBook,
            toggleError,
            // prevPage, nextPage, handlePage,
            heartFavoriteHandler, checkedHandler

        }}>
            {children}
        </FilterContext.Provider>
    )
}


// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}