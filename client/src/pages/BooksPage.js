import React from "react";
import {Genres, Sort, BookSizePulitzerPrizeFilter, BooksList} from "../components"

const BooksPage = () => {

    return (
        <section >
            <Genres/>
            <BookSizePulitzerPrizeFilter/>
            <Sort/>
            <BooksList/>
        </section>
    )
}

export default BooksPage;