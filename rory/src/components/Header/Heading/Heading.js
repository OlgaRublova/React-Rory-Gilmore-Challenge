import React from 'react';

const Heading = ({loadAnswerLayout}) => {

    return (
            <div className="header-text">
                <h1 className="text-heading">Would you like to read like
                    <span> Rory Gilmore</span> ?
                </h1>
                <div display="displayFlex">
                    <button className="btn" onClick={loadAnswerLayout}>Yes</button>
                    <button className="btn">No</button>
                </div>

            </div>

    )
}

export default Heading;