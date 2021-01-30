import React from 'react';
import HeadingButton from "../../Buttons/Button/HeadingButton";

const Heading = () => {
    return (
        <div>
            <h1 className="text-heading">Would you like to read like
                <span> Rory Gilmore</span> ?
            </h1>
            <div display="displayFlex">
                <HeadingButton><span>Yes</span></HeadingButton>
                <HeadingButton><span>No</span></HeadingButton>
            </div>
        </div>
    )
}

export default Heading;