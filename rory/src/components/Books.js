import Book from "./Book";
import {useGlobalContext} from "../contex";
import {useEffect} from "react";
import booksList from "./data";

const Books = () => {
    const {data, page, books,setBooks} = useGlobalContext();

    useEffect(() => {
        setBooks(data[page])
        // eslint-disable-next-line
    }, [page]);



    return(
        <section className="books-container">
            {books.map(book => {
                return (
                    <Book key={book.id} {...book}/>
                )
            })}
        </section>
    )
}
export default Books;