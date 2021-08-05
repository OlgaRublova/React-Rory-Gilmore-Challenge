import Title from "./Title";
import Gallery from "./Gallery";
import urls from "../urls";
import Heading from "./Heading";
import {useEffect, useState} from "react";


const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
        theme = localStorage.getItem("theme")
    }
    return theme;
}
const Home = () => {
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
        <>
            <Title title="Rory Gilmore Reading Challenge"/>
            <section className="header">
                <Gallery urls={urls} toggleTheme={toggleTheme} theme={theme}/>
                <Heading/>
            </section>
        </>

    )
}
export default Home;