import React from 'react'
import {Link} from "react-router-dom";
import {useListContext} from "../context/list_context"

const ListTotals = () => {
    const {checked_items} = useListContext();

    return (
        <>
            <article className="section-info-global">
                <div className="section-info-global__heading">You have read <span>{checked_items.length}</span> book(s)
                and beat the average by <span>12%</span></div>
            </article>

            <div className="btn-primary-box">
                <Link
                    to="/books"
                    className="btn-primary"
                >
                    add more books
                </Link>

                <button
                    className="btn-primary clear-btn"
                    // onClick={clearList}
                >
                    clear your list
                </button>
            </div>
        </>

    )
}

export default ListTotals;