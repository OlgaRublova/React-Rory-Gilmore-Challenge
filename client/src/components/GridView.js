import React from "react";
import {Link} from "react-router-dom";
import {AiFillHeart, BiCheckSquare, RiDeleteBin6Line} from "react-icons/all";

import {ImageColorOnScroll} from "./index";

import {useFilterContext} from "../context/filter_context"
import {useListContext} from "../context/list_context"

const GridView = () => {
    const {filtered_books: books, removeBook, heartFavoriteHandler, checkedHandler} = useFilterContext();
    const {addToList} = useListContext();
    return (
        <section className="books-container--grid">
            {books.map((book) => {
                const {checked, favorite, id, firstName, lastName, title, genre, page, cover} = book;
                return (
                    <article key={id} className="books-container--grid__book">
                        <Link to={`/books/${id}`} key={id}>
                        <ImageColorOnScroll title={title} cover={cover}/>
                        </Link>
                        <div className="books-container--grid__book-icons-wrapper">
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
                            <div className="books-container--grid__book-info-wrapper">
                                <h4>{firstName} {lastName}</h4>
                                <p>{title}</p>
                            </div>

                    </article>
                )
            })
            }
        </section>
    )
}

export default GridView;