import SearchForm from "./SearchForm";

const Genres = ({genres, filterBooksByGenre}) => {

    return (
        <section>
            <SearchForm/>
            <div className="btn-container">
                {genres.map((genre, id) => {
                    return (
                        <button
                            type='button'
                            className="genre-btn"
                            key={id}
                            onClick={() => filterBooksByGenre(genre)
                            }
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