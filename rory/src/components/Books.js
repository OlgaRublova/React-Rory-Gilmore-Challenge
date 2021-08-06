import SingleBook from "./SingleBook";
import {useGlobalContext} from "../contex";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import {FaHeart, CgMore, RiDeleteBin6Fill} from "react-icons/all";

const Books = () => {
    const {data, page, books, setBooks, isLoading, setIsLoading, removeBook, answer} = useGlobalContext();


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
        <>

            {answer && <section className="books-container">
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

            {!answer && <section>
                <article className="section-text">
                    <div className="section-text__header">OK!</div>
                    <div className="section-text__sub">Next time then!</div>
                </article>

            </section>}
        </>


    )
}
export default Books;