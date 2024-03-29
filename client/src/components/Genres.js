import React from "react";
import {SearchForm} from "./index";
import {useFilterContext} from "../context/filter_context"


const Genres = () => {
    const {all_books: books, updateFilters, genre} = useFilterContext();
    let genres = ["all", ...new Set(books.map((book) => book.genre))];

    return (
        <section>
            <SearchForm/>
            <div className="genre-buttons-list">
                {genres.map((g, id) => {
                    return (
                        <button
                            name="genre"
                            type="button"
                            className={`${genre === g ? "genre-button genre-button--active" : "genre-button"}`}
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