import {Link} from "react-router-dom"
import {AiOutlineHeart,AiFillHeart, RiDeleteBin6Line, BiBook, BiCheckSquare, IoAddCircleOutline} from "react-icons/all";
import {useFilterContext} from "../context/filter_context";
import React from "react";
import {useListContext} from "../context/list_context";

const Books = () => {
    const {filtered_books: books, removeBook} = useFilterContext();
    const {addToList} = useListContext();


    return (

        <section className="books-container">
            {books.map(book => {
                const {id, firstName, lastName, title, genre, page, cover} = book;
                return (
                    <article key={id} className="book">
                        <img src={cover} alt={title} className="book-img"/>
                        <div className="book-icons__box">
                            <BiCheckSquare />
                            <RiDeleteBin6Line onClick={() => removeBook(id)}/>

                            <AiFillHeart
                                name="icon"
                                onClick={() => addToList(id, firstName, lastName, title, genre, page, cover)}

                            />
                        </div>

                        <div className="book-info">
                            <div>
                                <h4>{firstName} {lastName}</h4>
                                <p>{title}</p>
                                <Link to={`/books/${id}`} key={id} className="icon-book__container">
                                    <BiBook style={{"marginRight": "0.4rem"}}></BiBook>
                                    <span>Read More </span>
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