import React from 'react';

const Genres = ({genres, filterBooks}) => {
    return (
        <div className="btn-container">
            {genres.map((genre, id) => {
                return (
                    <button
                        type='button'
                        className="btn genre-btn"
                        key={id}
                        onClick={() => filterBooks(genre)}
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