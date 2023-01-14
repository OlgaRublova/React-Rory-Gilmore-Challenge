import React from "react";
import {useFilterContext} from "../context/filter_context";


const PulitzerPrizeFilter = () => {
    const {book_size, updateFilters, pulitzer_prize} = useFilterContext();
    const book_sizes = ["ALL", "XS", "S", "M", "L", "XL"]

    return (
        <section>
            <div className="inp-cbx-container">
                <div>
                    <input
                        className="inp-cbx" // important to  keep it for the stroke to work
                        id="cbx"
                        type="checkbox"
                        style={{"display": "none"}}
                        onChange={updateFilters}
                        checked={pulitzer_prize}
                        name="pulitzer_prize"
                    />
                    <label className="cbx" htmlFor="cbx">
                <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                        <span>Pulitzer Price</span>
                    </label>
                </div>
                <div className="book-size-buttons-container">
                    <span>Book size: </span>
                    <div className="book-size-buttons">
                        {
                            book_sizes.map((size, index) => {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={updateFilters}
                                        name="book_size"
                                        className={`${book_size === size ? "book-size-btn book-size-btn--active" : "book-size-btn"}`}
                                    >
                                        {size}
                                    </button>

                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </section>
    )
}

export default PulitzerPrizeFilter