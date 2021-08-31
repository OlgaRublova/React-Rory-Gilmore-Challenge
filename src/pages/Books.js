import Book from "../components/Book"
import React, {useEffect, useState} from "react";
import {useFilterContext} from "../context/filter_context";


const Books = () => {
    const {filtered_books: books} = useFilterContext();
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     setIsLoading(true);
    //     new Promise(function (resolve) {
    //         setTimeout(function () {
    //             resolve();
    //         }, 1000)
    //     }).then(() => {
    //         setLikes(all_books);
    //         setIsLoading(false)
    //     })
    //     return () => {
    //         console.log("clean-up")
    //     }
    // }, [])


    // if (isLoading) return <div>Loading...</div>

    return (

        <section className="books-container">
            { books.map(book => <Book key={book.id}{...book}/>) }
        </section>
    )
}
export default Books;