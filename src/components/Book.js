import {Link} from "react-router-dom"
import {AiFillHeart, RiDeleteBin6Line, BiBook, BiCheckSquare} from "react-icons/all";
import {useFilterContext} from "../context/filter_context";
import {useListContext} from "../context/list_context";

import React from "react";
import ImageColorOnScroll from "./ImageColorOnScroll";

const Book = ({id, firstName, lastName, title, genre, page, cover, favorite, checked, pulitzer}) => {
    const {removeBook, heartFavoriteHandler, checkedHandler} = useFilterContext();
    const {addToList} = useListContext();

    return (
        <article key={id} className="book">
            <ImageColorOnScroll title={title} cover={cover}/>

            <div className="book-icons__box">
                <BiCheckSquare
                    data-checked={id}
                    className={checked ? "checked" : null}
                    onClick={
                        (e) => {
                            checkedHandler(e, !checked);
                        }}
                >
                </BiCheckSquare>
                <RiDeleteBin6Line onClick={() => removeBook(id)}/>
                <AiFillHeart
                    data-sessionid={id}
                    className={favorite ? "favorite" : null}
                    onClick={
                        (e) => {
                            heartFavoriteHandler(e, !favorite);
                            addToList(id, firstName, lastName, title, genre, page, cover);
                        }}>
                </AiFillHeart>
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