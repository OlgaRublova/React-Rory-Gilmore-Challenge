import './App.css';

import {Switch, Route} from "react-router-dom"

import Home from "./components/Home"
import SingleBook from "./components/SingleBook";


function App() {

    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/books/:id" children={<SingleBook/>}/>
        </Switch>
    );
}

export default App;
