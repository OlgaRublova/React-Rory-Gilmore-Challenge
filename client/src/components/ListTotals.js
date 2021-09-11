import React from 'react'
import {Link} from "react-router-dom";
import {useListContext} from "../context/list_context"

const ListTotals = () => {
const {list, clearList} = useListContext();

    return (
        <>
            <article className="section-info">
                <div className="section-info__heading">You want to read <span>{list.length}</span> book(s)</div>
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
                    onClick={clearList}
                >
                    clear your list
                </button>
            </div>
        </>

    )
}

export default ListTotals;