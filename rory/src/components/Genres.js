import {useGlobalContext} from "../contex";

const Genres = ({genres, filterBooksByGenre}) => {
    const {answer} = useGlobalContext();

    return (
        answer && <div className="btn-container">
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