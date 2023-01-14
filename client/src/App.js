import './App.css';
import React from "react";
import {
    Route,
    Routes,
} from "react-router-dom";


import {
    Home,
    SingleBookPage,
    AboutOlga,
    ErrorPage,
    BooksList

} from "../src/pages/index"
import WriteReview from "./pages/WriteReview";
import EditReview from "./pages/EditReview";
import Authentication from "./pages/Authentication";



function App() {
    return (

        <Routes>

            <Route path="/auth" element={<Authentication/>} exact/>


            <Route path="/home" element={<Home/>} exact/>
            <Route path="/olga" element={<AboutOlga/>} exact/>
            <Route path="/books" element={<BooksList/>} exact/>
            <Route path="/books/:id" element={<SingleBookPage/>} exact/>
            <Route path="/write/:id" element={<WriteReview/>} exact/>
            <Route path="/edit/:id" element={<EditReview/>} exact/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>


    );
}

export default App;
