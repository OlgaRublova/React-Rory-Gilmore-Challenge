import axios from 'axios'
import React, {useContext, useEffect, useReducer} from 'react'
import reducer from '../reducer/books_reducer';


const initialState = {
    books: [],
    books_error: false,
    books_loading: true,
}

const BooksContext = React.createContext();

export const BooksProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchBooks = async (url) => {
        dispatch({type: "GET_BOOKS_BEGIN"})

        try {
            const response = await axios.get(url);
            const books = response.data;
            dispatch({type: "GET_BOOKS_SUCCESS", payload: books})
        } catch (error) {
            dispatch({type: "GET_BOOKS_ERROR"})
        }
    }

    useEffect(() => {
        console.log("check")
        fetchBooks("/data.json");
    }, [])

    return (
        <BooksContext.Provider value={{
            ...state,
        }}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooksContext = () => {
    return useContext(BooksContext);
}