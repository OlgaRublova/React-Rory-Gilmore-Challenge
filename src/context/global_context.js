import React, {useContext, useEffect, useState} from "react";

const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme;
}


const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [theme, setTheme] = useState(getStorageTheme());


    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme")
        } else {
            setTheme("light-theme")
        }
    }


    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <GlobalContext.Provider value={{
            theme, toggleTheme
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}