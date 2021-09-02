import React from "react";
import Pulitzer from "./Pulitzer";
import LengthButtons from "./LengthButtons";

const Checkbox = () => {

    return (
        <section>
            <div className="form-check-box">
                <Pulitzer/>
                <LengthButtons/>
            </div>
        </section>
    )
}

export default Checkbox