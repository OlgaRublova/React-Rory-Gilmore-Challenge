import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {AppProvider} from "./contex";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Router>
                <App/>
            </Router>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
