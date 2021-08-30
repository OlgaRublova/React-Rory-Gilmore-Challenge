import {Link} from "react-router-dom"
import {AiFillHeart, RiDeleteBin6Line, BiBook, BiCheckSquare, IoAddCircleOutline} from "react-icons/all";
import {useFilterContext} from "../context/filter_context";
import {useListContext} from "../context/list_context";

import React, {useEffect, useRef, useState} from "react";

const Book = ({id, firstName, lastName, title, genre, page, cover, favorite, onHeartFavoriteHandler}) => {
    const {removeBook} = useFilterContext();
    const {addToList} = useListContext();
    const bookRef = useRef(null);

    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    const isInView = () => {
        const rect = bookRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };


    useEffect(() => {
        setIsLoading(false)
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    const scrollHandler = () => {
        setInView(isInView());
    }


    return (
        <article key={id} className="book">

            <img
                src={cover}
                alt={title}
                ref={bookRef}
                className={isLoading ? null : inView ? "book-img" : "book-img-shadow"}
            />

            <div className="book-icons__box">
                <BiCheckSquare/>
                <RiDeleteBin6Line onClick={() => removeBook(id)}/>
                <div>
                    <AiFillHeart
                        data-session={id}
                        className={favorite ? "favorite" : null}
                        name="icon"
                        onClick={
                            (e) => {
                                onHeartFavoriteHandler(e, !favorite);
                                addToList(id, firstName, lastName, title, genre, page, cover);
                            }}
                    />
                </div>

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
}

export default Book;