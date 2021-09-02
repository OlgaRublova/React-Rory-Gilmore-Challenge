import {useFilterContext} from "../context/filter_context";
import React from "react";

const Pulitzer = () => {
    const { pulitzer_prize, updateFilters} = useFilterContext();


    return (

            <div className="form-check-box">
                <label htmlFor="checked"
                >Pulitzer Price
                    <input
                        type="checkbox"
                        id="checked"
                        onChange={updateFilters}
                        checked={pulitzer_prize}
                        name="pulitzer_prize"
                    />
                </label>
            </div>


    )
}

export default Pulitzer;