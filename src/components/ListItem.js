import React from "react";
import {RiDeleteBin6Line} from "react-icons/all";
import {useListContext} from "../context/list_context"

const ListItem = ({id, firstName, lastName, title, genre, page, cover}) => {
    const {removeItem} = useListContext();

    return (
        <>

            <div key={id} className="book-list__item">
                <div className="image">
                    <img src={cover} alt={title}/>
                </div>

                <div className="author">
                    <h5>{firstName} {lastName}</h5>
                </div>
                <div className="title">
                    <h5>{title}</h5>
                </div>
                <div className="genre">
                    <h5>{genre}</h5>
                </div>
                <div className="page">
                    <h5>{page}</h5>
                </div>
                <div>
                    <RiDeleteBin6Line onClick={() => removeItem(id)}/>
                </div>
            </div>
        </>
    )

}

export default ListItem