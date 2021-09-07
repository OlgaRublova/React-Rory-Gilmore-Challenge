import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'

import Home from "./pages/Home"
import SingleBookPage from "./pages/SingleBookPage";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import AboutOlga from "./pages/AboutOlga";
import AboutRory from "./pages/AboutRory";
import WishListPage from "./pages/WishListPage";



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


                <Route path="/books/:id" children={<SingleBookPage/>}/>

                <Route exact path="/wish-list">
                    <WishListPage/>
                </Route>

                <Route path="*">
                    <ErrorPage/>
                </Route>

            </Switch>

        </Router>
    );
}

export default App;
