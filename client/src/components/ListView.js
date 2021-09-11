import React from "react";
import {AiFillHeart, BiCheckSquare, RiDeleteBin6Line} from "react-icons/all";

import {useFilterContext} from "../context/filter_context"
import {useListContext} from "../context/list_context"
import {ImageColorOnScroll} from "./index";

const ListView = () => {
    const {filtered_books: books} = useFilterContext();
    const { removeBook, heartFavoriteHandler, checkedHandler} = useFilterContext();
    const {addToList} = useListContext();
    return (
        <section className="books-container--list">
            {books.map((book) => {
               const { checked, favorite, id, firstName, lastName, title, genre, page, cover} = book;
                return (
                    <article key={id} className="books-container--list__book">
                        <div className="books-container--list__book__image">
                            <ImageColorOnScroll title={title} cover={cover}/>
                        </div>

                        <div className="books-container--list__book__info-wrapper">
                            <div>
                                <div className="books-container--list__book__info__title">{title}</div>
                                <div className="books-container--list__book__info__author">{lastName}, {firstName}</div>
                            </div>

                            <div>{genre}</div>
                            <div>{page} pages</div>

                        </div>

                        <div className="books-container--list__book__icons-wrapper">
                            <BiCheckSquare
                                data-checked={id}
                                className={checked ? "checked" : null}
                                onClick={
                                    (e) => {
                                        checkedHandler(e, !checked);
                                    }}
                            />
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
                    </article>
                )
            })}
        </section>
    )
}
export default ListView;