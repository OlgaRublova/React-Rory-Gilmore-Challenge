import React, {useContext, useEffect, useReducer} from 'react'
import reducer from "../reducer/user_reducer"


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
}


const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    })

    const LoginStart = () => {
        dispatch({
            type: "LOGIN_START",
        })
    }
    const LoginSuccess = user => {
        dispatch({
            type: "LOGIN_SUCCESS", payload: user
        })
    }
    const LoginOut = user => {
        dispatch({
            type: "LOGIN_OUT", payload: user
        })
    }
    const LoginFailure = () => {
        dispatch({
            type: "LOGIN_FAILURE",
        })
    }


    return (
        <UserContext.Provider value={{
            ...state,
            LoginStart, LoginSuccess, LoginFailure, LoginOut
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}