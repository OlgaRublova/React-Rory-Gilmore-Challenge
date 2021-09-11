import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from "react-router-dom";
import {FilterProvider} from "./context/filter_context";
import {BooksProvider} from "./context/books_context";
import {GlobalProvider} from "./context/global_context";
import {ListProvider} from "./context/list_context";


ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <BooksProvider>
                <FilterProvider>
                    <ListProvider>
                        <Router>
                            <App/>
                        </Router>
                    </ListProvider>
                </FilterProvider>
            </BooksProvider>

        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
