import SearchForm from "./SearchForm";
import {useFilterContext} from "../context/filter_context";
import React from "react";

const Genres = () => {
    const {genres, main, filterBooksByGenre} = useFilterContext();


    return (
        <section>
            <SearchForm/>
            <div className="genre-btn__container">
                {genres.map((genre, id) => {
                    return (
                        <button
                            name="genre"
                            type='button'
                            className={`${genre === main ? "genre-btn genre-btn--active" : "genre-btn "}`}
                            key={id}
                            onClick={() => filterBooksByGenre(genre)}
                        >
                            {genre}
                        </button>
                    )
                })
                }

            </div>

        </section>


    )

}
export default Genres;