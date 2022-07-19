import React from "react";
import {Link} from "react-router-dom";

import {ImageColorOnScroll} from "./index";
import {useFilterContext} from "../context/filter_context"
import Checkbox from "./Checkbox";

const BooksList = () => {
    const {filtered_books: books} = useFilterContext();

    return (
        <section>
            <div className="books-list-container">

                {books.map((book) => {
                    const {_id, firstName, lastName, title, cover} = book;

                    return (
                        <article className="books-list-container__book" key={_id}>
                            <Link to={`/books/${_id}`}>
                                <ImageColorOnScroll title={title} cover={cover}/>
                            </Link>

                            <Checkbox book={book}/>
                            <div className="books-container__book-info">
                                <h4>{firstName} {lastName}</h4>
                                <p>{title}</p>
                            </div>

                        </article>
                    )
                })}
                <div className="btn-primary-box">
                    <Link
                        to="/read"
                        className="btn-primary"
                    >
                        Finish
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BooksList;