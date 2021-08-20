import {useGlobalContext} from "../contex";
import {Link} from "react-router-dom"
import {FaHeart, RiDeleteBin6Fill, BiBook} from "react-icons/all";
import {useFilterContext} from "../context/filter_context";

const Books = () => {
    const {filtered_books: books, removeBook} = useFilterContext();

    console.log("Books - filtered_books: ")
    console.log(books)

    return (

        <section className="books-container">
            {books.map(book => {
                const {id, title, cover, firstName, lastName} = book;
                return (
                    <article key={id} className="book">
                        <img src={cover} alt={title} className="book-img"/>
                        <div className="icon">
                            <div className="checkbox-container">
                                <input type="checkbox"/>
                                <label></label>
                                <div id="star-five"></div>
                            </div>
                            <RiDeleteBin6Fill style={{'color': "grey"}}
                                              onClick={() => removeBook(id)}/>
                            <FaHeart/>
                        </div>

                        <div className="book-info">
                            <div>
                                <h4>{firstName} {lastName}</h4>
                                <p>{title}</p>
                                <Link to={`/books/${id}`} key={id} className="icon-book__container">
                                    <BiBook style={{"color": "yellow"}}></BiBook>
                                    <span className="icon-book__text">Read more</span>
                                </Link>
                            </div>

                        </div>
                    </article>
                )
            })}
        </section>


    )
}
export default Books;