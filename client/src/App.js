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
    AboutRory,
    WishListPage,
    Register,
    Login,
    ErrorPage
} from "../src/pages/index"
import {useUserContext} from "./context/user_context";

function App() {
    const {user} = useUserContext()

    return (
        <Router>
            <Title title="Rory Gilmore Reading Challenge"/>
            { user && <Navbar/>}


            <Switch>

                <Route path="/" exact>
                    {user ? <Home/> : <Register/>}
                </Route>

                <Route path="/login" exact>{user ? <Redirect to="/"/> : <Login/>} </Route>
                <Route path="/register" exact>{user ? <Redirect to="/"/> : <Register/>}</Route>

                <Route path="/olga" exact><AboutOlga/></Route>
                <Route path="/rory" exact><AboutRory/></Route>
                <Route path="/books" exact><Modal/></Route>
                <Route exact path="/wish-list"><WishListPage/></Route>

                <Route path="/books/:id" children={<SingleBookPage/>}/>
                <Route path="*"><ErrorPage/></Route>

            </Switch>
        </Router>
    );
}

export default App;