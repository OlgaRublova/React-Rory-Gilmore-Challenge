import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'

import Home from "./pages/Home"
import SingleBook from "./components/SingleBook";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import AboutOlga from "./pages/AboutOlga";
import AboutRory from "./pages/AboutRory";
import WishListPage from "./pages/WishListPage";
import LikedListPage from "./pages/LikedListPage";
import ReadListPage from "./pages/ReadListPage";


function App() {

    return (
        <Router>
            <Navbar/>

            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/olga" exact>
                    <AboutOlga/>
                </Route>
                <Route path="/rory" exact>
                    <AboutRory/>
                </Route>
                <Route path="/books" exact>
                    <Modal/>
                </Route>


                <Route path="/books/:id" children={<SingleBook/>}/>

                <Route exact path="/wish-list">
                    <WishListPage/>
                </Route>
                <Route exact path="/liked-list">
                    <LikedListPage/>
                </Route>
                <Route exact path="/read-list">
                    <ReadListPage/>
                </Route>

                <Route path="*">
                    <ErrorPage/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
