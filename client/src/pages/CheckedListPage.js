import React from 'react'
import {useListContext} from "../context/list_context";
import {Link} from "react-router-dom";
import ListContent from "../components/ListContent";


const CheckedListPage = () => {
    const {checked_items} = useListContext();

    if (checked_items.length < 1) {
        return (
            <article className="section-info-global">
                <div className="section-info-global__heading">You haven't read any books :(</div>
                <Link to="/books" className="btn-primary">Change That!</Link>
            </article>
        )
    }
    return (
        <ListContent/>
    )
}
export default CheckedListPage;