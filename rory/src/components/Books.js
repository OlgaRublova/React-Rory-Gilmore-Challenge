import SingleBook from "./SingleBook";
import {useGlobalContext} from "../contex";
import {useEffect} from "react";
import {Link} from "react-router-dom"
import {FaHeart} from "react-icons/all";

const Books = () => {
    const {data, page, books, setBooks, isLoading, setIsLoading} = useGlobalContext();

    useEffect(() => {
        setBooks(data[page]);
        setIsLoading(false);
        // eslint-disable-next-line
    }, [page]);

    if (isLoading) {
        return <div className="loading"></div>
    }
    console.log(isLoading)


    return (
        <section className="books-container">
            {books.map(book => {
                const {id, title, cover, firstName, lastName} = book;
                return (
                    <Link to={`/books/${id}`} key={id}>
                        <article key={id} className="book">
                            <img src={cover} alt={title} className="book-img"/>
                            <div className="icon">
                                <FaHeart/>
                            </div>

                            <div className="book-info">
                                <div>
                                    <h4>{firstName} {lastName}</h4>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>

    )
}
export default Books;