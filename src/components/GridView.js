import React from "react";
import {Link} from "react-router-dom";
import {AiFillHeart, BiBook, BiCheckSquare, RiDeleteBin6Line} from "react-icons/all";

import {ImageColorOnScroll} from "./";

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
                        <ImageColorOnScroll title={title} cover={cover}/>

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
                            <div>
                                <h4>{firstName} {lastName}</h4>
                                <p>{title}</p>
                                <Link to={`/books/${id}`} key={id} className="link-read-more-wrapper">
                                    <BiBook
                                        style={{"marginRight": "0.4rem"}}
                                    />
                                    <span>Read More </span>
                                </Link>
                            </div>
                        </div>

                    </article>
                )
            })
            }
        </section>
    )
}

export default GridView;