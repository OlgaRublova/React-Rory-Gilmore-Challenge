import React, { useContext, useReducer} from 'react'
import reducer from "../reducer/user_reducer"



const initialState = {
    fullName: "",
    password: "",
    confirmPassword: "",
    email: ""
}


const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);








    return (
        <UserContext.Provider value={{
            ...state,

        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}