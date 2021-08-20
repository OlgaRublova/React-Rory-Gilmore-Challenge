import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {AppProvider} from "./contex";
import {BrowserRouter as Router} from "react-router-dom";
import {FilterProvider} from "./context/filter_context";
import {BooksProvider} from "./context/books_context";


ReactDOM.render(
    <React.StrictMode>
        <BooksProvider>
            <FilterProvider>
                <AppProvider>
                    <Router>
                        <App/>
                    </Router>
                </AppProvider>
            </FilterProvider>
        </BooksProvider>


    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
