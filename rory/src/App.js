import './App.css';

import booksList from '../src/components/data';
import {useState, useEffect} from "react";
import Genres from "./components/Genres";

import Home from "./components/Home"
import {useGlobalContext} from "./contex";
import Books from "./components/Books";
import Pages from "./components/Pages"
import SearchForm from "./components/SearchForm";

console.clear();



function App() {

    const { genres, filterBooksByGenre} = useGlobalContext();

    return (
        <main>
            <Home/>
            <SearchForm/>
            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />
            <Pages/>
            <Books/>

        </main>
    );
}

export default App;
