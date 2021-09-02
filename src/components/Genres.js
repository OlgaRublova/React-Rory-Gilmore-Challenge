import SearchForm from "./SearchForm";
import {useFilterContext} from "../context/filter_context";
import React, {useState} from "react";

const Genres = () => {
    const {all_books: books, updateFilters, genre} = useFilterContext();
    let genres = ['all', ...new Set(books.map((book) => book.genre))];

    return (
        <section>
            <SearchForm/>
            <div className="genre-btn__container">
                {genres.map((g, id) => {
                    return (
                        <button
                            name="genre"
                            type='button'
                            className={`${genre === g ? "genre-btn genre-btn--active" : "genre-btn "}`}
                            key={id}
                            onClick={updateFilters}
                        >
                            {g}
                        </button>
                    )
                })
                }

            </div>

        </section>


    )

}
export default Genres;