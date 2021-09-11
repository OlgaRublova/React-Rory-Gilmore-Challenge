import React from 'react'
import {BsFillGridFill, BsList} from "react-icons/all";
// import {useFilterContext} from "../context/index";
import {useFilterContext} from "../context/filter_context"


const Sort = () => {
    const {
        filtered_books: books, sort, updateSort, grid_view, setGridView, setListView
    } = useFilterContext();
    return (
        <section>

            <article className="section-info">
                <div className="section-info__heading">
                    We found <span>{books.length}</span> books
                </div>
            </article>


            <form className="input-sort-form-wrapper">
                <button
                    type="button"
                    className={`${grid_view ? 'view__btn--active' : "view__btn"}`}
                    onClick={setGridView}>
                    <BsFillGridFill/>
                </button>
                <button
                    type="button"
                    className={`${!grid_view ? 'view__btn--active' : "view__btn"}`}
                    onClick={setListView}>
                    <BsList/>
                </button>

                <select name="sort" id="sort" value={sort} onChange={updateSort}>
                    <option value="page-lowest">Number of pages (lowest)</option>
                    <option value="page-highest">Number of pages (highest)</option>
                    <option value="name-a">Author (a - z)</option>
                    <option value="name-z">Author (z - a)</option>
                </select>
                <button>Sort By</button>


            </form>
        </section>
    )
}

export default Sort;