
const Genres = ({genres, filterBooksByGenre}) => {
    return (
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

    )

}
export default Genres;