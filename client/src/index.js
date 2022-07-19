import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import './index.css';
import App from './App';

import {FilterProvider} from "./context/filter_context";
// import {BooksProvider} from "./context/books_context";
import {GlobalProvider} from "./context/global_context";
import {ListProvider} from "./context/list_context";
import {UserProvider} from "./context/user_context";
import {ReviewProvider} from "./context/review_context";


ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            {/*<BooksProvider>*/}
                <FilterProvider>
                    <ListProvider>
                        <UserProvider>
                            <ReviewProvider>
                                <Router>
                                    <App/>
                                </Router>
                            </ReviewProvider>
                        </UserProvider>
                    </ListProvider>
                </FilterProvider>
            {/*</BooksProvider>*/}
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


