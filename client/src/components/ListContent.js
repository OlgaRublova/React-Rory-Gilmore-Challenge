import React from "react";
import {useListContext} from "../context/list_context"

import {ListItem, ListTotals, ListColumns} from "./index";

const ListContent = () => {
    const {checked_items} = useListContext();
    return (
        <section>
            <ListColumns/>
            {
                checked_items.map((item) => {
                    return <ListItem key={item.id}{...item}/>
                })
            }

            <ListTotals/>

        </section>

    )

}

export default ListContent