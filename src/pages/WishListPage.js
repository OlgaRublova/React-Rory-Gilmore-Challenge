import React from 'react'
import {useListContext} from "../context/list_context";
import {Link} from "react-router-dom";
import ListContent from "../components/ListContent";


const WishListPage = () => {
    const {list} = useListContext();

    if (list.length < 1) {
        return (
            <article className="section-info">
                <div className="section-info__heading">Your Wish List of books is empty</div>
                <Link to="/books" className="btn-primary">fill it</Link>
            </article>
        )
    }
    return ( <ListContent/>)
}
export default WishListPage;