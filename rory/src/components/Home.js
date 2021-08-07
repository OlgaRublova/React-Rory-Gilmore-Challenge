import Title from "./Title";

import {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import Genres from "./Genres";
import Pages from "./Pages";
import {useGlobalContext} from "../contex";
import Books from "./Books";
import Header from "./Header"
import Modal from "./Modal"
import Loading from "./Loading";

const Home = () => {
    const {genres, filterBooksByGenre} = useGlobalContext();


    return (
        <main>
            <Modal/>

            <Title title="Rory Gilmore Reading Challenge"/>
            <Header/>

            {/*<SearchForm/>*/}

            {/*<Pages/>*/}

        </main>

    )
}
export default Home;