import React from 'react';


const HeadingButton = ({children, func}) => {
    return (

        <button
            className="btn btn-4"
            type="button"
            onClick={func}>
            {children}
        </button>
    )
}

export default HeadingButton;