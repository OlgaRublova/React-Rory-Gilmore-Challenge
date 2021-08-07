import SingleBook from "./SingleBook";
import {useGlobalContext} from "../contex";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import {FaHeart, CgMore, RiDeleteBin6Fill} from "react-icons/all";
import Loading from "./Loading";

const Books = () => {
    const {data, page, books, setBooks, isLoading, setIsLoading, removeBook, answer} = useGlobalContext();


    return (
        <>
            {!isLoading && <section className="books-container">
                {books.map(book => {
                    const {id, title, cover, firstName, lastName} = book;
                    return (
                        // <Link to={`/books/${id}`} key={id} >
                        <article key={id} className="book">
                            <img src={cover} alt={title} className="book-img"/>
                            <div className="icon">
                                <div className="checkbox-container">
                                    <input type="checkbox"/>
                                    <label></label>
                                </div>
                                <CgMore style={{'color': "white"}}/>
                                {/*<button onClick={() => removeBook(id)}>remove</button>*/}
                                <RiDeleteBin6Fill style={{'color': "white", 'border': "1px solid black"}}
                                                  onClick={() => removeBook(id)}/>

                                <FaHeart/>
                            </div>

                            <div className="book-info">
                                <div>
                                    <h4>{firstName} {lastName}</h4>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </article>
                        // </Link>
                    )
                })}
            </section>}
        </>


    )
}
export default Books;