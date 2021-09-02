import Book from "../components/Book"
import React from "react";
import {useFilterContext} from "../context/filter_context";


const Books = () => {
    const {filtered_books: books} = useFilterContext();

    return (
            <section className="books-container">
                {books.map(book => <Book key={book.id}{...book}/>)}
            </section>


    )
}
export default Books;