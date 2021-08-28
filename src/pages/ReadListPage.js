import React from "react";
import {RiDeleteBin6Line} from "react-icons/all";
import {useListContext} from "../context/list_context";

const ReadListItem = ({id, title, lastName, firstName, cover, page}) => {
    const {removeItem} = useListContext();

    return (
        <h1>LikedListItem</h1>
        // <article key={id}>
        //     <img src={cover} alt={title} className="book-img"/>
        //     <h5>{lastName}, {firstName}</h5>
        //
        //     <RiDeleteBin6Line onClick={() => removeItem(id)}/>
        //
        // </article>
    )

}

export default ReadListItem