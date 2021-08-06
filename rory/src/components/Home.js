import Title from "./Title";

import {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import Genres from "./Genres";
import Pages from "./Pages";
import {useGlobalContext} from "../contex";
import Books from "./Books";
import Header from "./Header"
import Answer from "./Answer"


const Home = () => {
    const {genres, filterBooksByGenre} = useGlobalContext();

    return (
        <main>
            <Title title="Rory Gilmore Reading Challenge"/>
            <Header/>
            <SearchForm/>
            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />
            <Pages/>
            <Books/>
            <Answer/>

        </main>

    )
}
export default Home;