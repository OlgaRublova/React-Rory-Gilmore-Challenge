import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

import {
    Title,
    Navbar,
    Modal
} from "./components/index"

import {
    Home,
    SingleBookPage,
    AboutOlga,
    BooksPage,
    Register,
    Login,
    ErrorPage,
    CheckedListPage

} from "../src/pages/index"
import {useUserContext} from "./context/user_context";
import WriteReview from "./pages/WriteReview";
import EditReview from "./pages/EditReview";

function App() {
    const {user} = useUserContext()

    return (
        <Router>
            <Title title="Rory Gilmore Reading Challenge"/>
            {user && <Navbar/>}


            <Switch>

                <Route path="/" exact>
                    {user ? <Home/> : <Register/>}
                </Route>

                <Route path="/login" exact>{user ? <Redirect to="/"/> : <Login/>} </Route>
                <Route path="/register" exact>{user ? <Redirect to="/"/> : <Register/>}</Route>

                <Route path="/olga" exact><AboutOlga/></Route>

                <Route path="/books" exact><BooksPage/></Route>
                <Route path="/read" exact><CheckedListPage/></Route>

                <Route path="/write/:id" exact><WriteReview/></Route>
                <Route path="/edit/:id" exact><EditReview/></Route>

                <Route path="/books/:id" children={<SingleBookPage/>}/>
                <Route path="*"><ErrorPage/></Route>

            </Switch>
        </Router>
    );
}

export default App;
