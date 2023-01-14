import React, {useContext, useReducer} from 'react'
import reducer from "../reducer/review_reducer"
import axios from "axios";
import {useAuthContext} from "./auth_context";


const initialState = {
    reviews: [],
    write_review: false,
    edit_review: false,
}


const ReviewContext = React.createContext();

export const ReviewProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {user: currentUser} = useAuthContext();



    const removeReview = async id => {
        const responseReviewId = await axios.delete("/reviews/" + id, {data: {"userId": currentUser.user._id}})
        dispatch({type: "REMOVE_REVIEW", payload: responseReviewId})

        //  refreshing the page
        window.location.reload(true)
    }

    const editReview = async id => {
        const responseReviewId = await axios.put("/reviews/" + id, {data: {"userId": currentUser.user._id}})

        dispatch({type: "EDIT_REVIEW", payload: responseReviewId})
    }


    return (
        <ReviewContext.Provider value={{
            ...state,
            removeReview, editReview

        }}>
            {children}
        </ReviewContext.Provider>
    )
}

export const useReviewContext = () => {
    return useContext(ReviewContext);
}