import React from "react";
import {Link} from "react-router-dom";

import {ImageColorOnScroll, Navbar} from "../components";
import {useFilterContext} from "../context/filter_context"
import Checkbox from "../components/Checkbox";
import {Genres} from "../components";
import {Sort} from "../components";
import ButtonComponent from "../components/button/button.component";
import PulitzerPrizeFilter from "../pulitzer/PulitzerPrizeFilter";


const BooksList = () => {
    const {filtered_books: books} = useFilterContext();

    return (
        <>
            <Navbar/>
            <section>

                <div className="section-info">
                    <h1>Check if Rory read your favorite book</h1>
                </div>

                <Genres/>

                <div className="section-info">
                    <h1>How many books have you read from her list?</h1>
                </div>
                <div className="filtering-options">
                    <PulitzerPrizeFilter/>
                    <Sort/>
                </div>

                <div className="books-list-container">
                    {books.map((book) => {
                        const {_id, cover} = book;

                        return (
                            <article className="books-list-container__book" key={_id}>
                                <Link to={`/books/${_id}`}>
                                    <ImageColorOnScroll cover={cover}/>
                                </Link>
                                <Checkbox book={book}/>
                            </article>
                        )
                    })}

                </div>
                <ButtonComponent buttonType="results">Check your results</ButtonComponent>
            </section>
        </>
    )
}

export default BooksList;