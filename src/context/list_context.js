import React, {useEffect, useContext, useReducer, useState} from 'react'
import reducer from "../reducer/list_reducer"

const getStorageList = () => {
    let list = [];
    if (localStorage.getItem("list")) {
        list = JSON.parse(localStorage.getItem("list"))
    }
    return list;
}


const initialState = {
    list: getStorageList(),
    total_items: [],
    wished_items: [],
    checked_items: [],

}


const ListContext = React.createContext();

export const ListProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [isOnline, setIsOnline] = useState(null);


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(state.list));
    }, [state.list])




    //  add to cart
    const addToList = (id, firstName, lastName, title, genre, page, cover) => {
        // setIsOnline(id)
        dispatch({type: "ADD_TO_LIST", payload: {id, firstName, lastName, title, genre, page, cover}})

    }

    const removeItem = id => {
        dispatch({type: "REMOVE_LIST_ITEM", payload: id})
    }

    const clearList = () => {


        dispatch({type: "CLEAR_LIST"})
    }


    return (
        <ListContext.Provider value={{
            ...state,
            addToList,
            removeItem,
            clearList,
            // isOnline
            // query

        }}>
            {children}
        </ListContext.Provider>
    )
}

export const useListContext = () => {
    return useContext(ListContext);
}