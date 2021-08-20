import SearchForm from "./SearchForm";
import {useFilterContext} from "../context/filter_context";

const Genres = () => {
    const {genres, main, filterBooksByGenre} = useFilterContext();


    return (
        <section>
            <SearchForm/>
            <div className="btn-container">
                {genres.map((genre, id) => {

                    return (
                        <button
                            type='button'
                            className={`${genre === main ? "genre-btn active-btn" : "genre-btn "}`}
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