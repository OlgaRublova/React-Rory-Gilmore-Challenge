import React from 'react'
import {useFilterContext} from "../context/filter_context";
import {FcGenericSortingDesc} from "react-icons/all";
import Pulitzer from "./Pulitzer";

const Sort = () => {
    const {
        filtered_books: books, sort, updateSort
    } = useFilterContext();
    return (
        <section>
            <Pulitzer/>

            <article className="section-info">
                <div className="section-info__heading">
                    We found <span>{books.length}</span> books
                </div>
            </article>


            <form className="form-control">
                <FcGenericSortingDesc style={{"margin": "0 1rem 0 1rem"}}/>

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