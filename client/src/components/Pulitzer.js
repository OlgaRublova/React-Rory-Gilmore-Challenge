import React from "react";
import {useFilterContext} from "../context/filter_context"

const Pulitzer = () => {
    const {pulitzer_prize, updateFilters} = useFilterContext();
    return (

        <div>
            <input
                className="inp-cbx"
                id="cbx"
                type="checkbox"
                style= {{"display": "none"}}
                onChange={updateFilters}
                checked={pulitzer_prize}
                name="pulitzer_prize"/>
            <label className="cbx" htmlFor="cbx">
                <span>
            <svg width="12px" height="10px" viewBox="0 0 12 10">
                 <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
                </span>
                <span>Pulitzer Price</span>
            </label>
        </div>
    )
}

export default Pulitzer;