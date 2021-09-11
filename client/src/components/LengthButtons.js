import React from "react";
import {useFilterContext} from "../context/filter_context"

const book_sizes = [
    {
        id: 0,
        size: "ALL"
    },
    {
        id: 1,
        size: "XS"
    },
    {
        id: 2,
        size: "S"
    },
    {
        id: 3,
        size: "M"
    },
    {
        id: 4,
        size: "L"
    },
    {
        id: 5,
        size: "XL"
    },
]


const LengthButtons = () => {
    const {book_size, updateFilters} = useFilterContext();

    return (
        <div className="length-buttons__container">
            <h5>Book size: </h5>
            {
                book_sizes.map((item) => {
                    const {id, size} = item;

                    return (
                        <button
                            key={id}
                            type="button"
                            onClick={updateFilters}
                            name="book_size"
                            className={`${book_size === size ? "length__button--active" : "length__button"}`}
                        >
                            {size}
                        </button>

                    )
                })
            }
        </div>

    )

}

export default LengthButtons