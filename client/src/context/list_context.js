import React, {useContext, useReducer, useEffect} from 'react'
import reducer from "../reducer/list_reducer"

// const getStorageList = () => {
//     let checked_items = [];
//     if (localStorage.getItem("checked_items")) {
//         checked_items = JSON.parse(localStorage.getItem("checked_items"))
//     }
//     return checked_items;
// }

const initialState = {
    total_items: [],
    checked_items: [],
    liked_items: [],
}


const ListContext = React.createContext();

export const ListProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     localStorage.setItem('checked_items', JSON.stringify(state.checked_items));
    // }, [state.checked_items])

//toggle adding or removing a book into the checked list
    const toggleList = (_id, firstName, lastName, title, cover) => {
        dispatch({type: "TOGGLE_LIST", payload: {_id, firstName, lastName, title, cover}})
        console.log(...state.checked_items)
    }

    // //  add to cart
    // const addToList = (_id, firstName, lastName, title, cover) => {
    //     dispatch({type: "ADD_TO_LIST", payload: {_id, firstName, lastName, title, cover}})
    //     console.log("Added to the checked list")
    //     console.log(...state.checked_items)
    // }
    //
    // const removeItem = id => {
    //     dispatch({type: "REMOVE_LIST_ITEM", payload: id})
    // }

    const clearList = () => {
        dispatch({type: "CLEAR_LIST"})
    }

    return (
        <ListContext.Provider value={{
            ...state,
            toggleList,
            // addToList,
            // removeItem,
            clearList,
            // checkedHandler,
        }}>
            {children}
        </ListContext.Provider>
    )
}

export const useListContext = () => {
    return useContext(ListContext);
}