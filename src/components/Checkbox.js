import React from "react";
import {LengthButtons, Pulitzer } from "./";

const Checkbox = () => {

    return (
        <section>
            <div className="pulitzer-prize-size-filter__wrapper">
                <Pulitzer/>
                <LengthButtons/>
            </div>
        </section>
    )
}

export default Checkbox