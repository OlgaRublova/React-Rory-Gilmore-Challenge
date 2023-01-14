import React from 'react'
import {useFilterContext} from "../context/filter_context"


const Sort = () => {
    const {
        filtered_books: books, sort, updateSort
    } = useFilterContext();
    return (
        <div className="filtering-options">
            <form className="input-form-container">
                <select name="sort" id="sort" value={sort} onChange={updateSort}>
                    <option value="page-lowest">Number of pages (lowest)</option>
                    <option value="page-highest">Number of pages (highest)</option>
                    <option value="name-a">Author (a - z)</option>
                    <option value="name-z">Author (z - a)</option>
                </select>
            </form>
        </div>

    )
}

export default Sort;