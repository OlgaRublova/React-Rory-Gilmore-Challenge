import React from 'react';
import "./button.styles.scss"

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
    genre: "genre",
    results: "results",

}


const ButtonComponent = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>

    );
};

export default ButtonComponent;