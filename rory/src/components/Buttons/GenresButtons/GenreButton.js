import React from 'react';

const GenreButton = ({children, onClick}) => {

    return (
        <button onClick={onClick}
            className="genre-btn"
        >{children}</button>
    )
}

export default GenreButton;