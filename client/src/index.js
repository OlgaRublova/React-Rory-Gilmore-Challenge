import React, {StrictMode} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import {FilterProvider} from "./context/filter_context";
import {GlobalProvider} from "./context/global_context";
import {ListProvider} from "./context/list_context";
import {AuthProvider} from "./context/auth_context";
import {ReviewProvider} from "./context/review_context";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <GlobalProvider>
                <FilterProvider>
                    <ListProvider>
                        <AuthProvider>
                            <ReviewProvider>
                                <Router>
                                    <App/>
                                </Router>
                            </ReviewProvider>
                        </AuthProvider>
                    </ListProvider>
                </FilterProvider>
        </GlobalProvider>
    </StrictMode>
);


