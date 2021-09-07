import React from "react";
import {useListContext} from "../context/list_context"

import {ListItem, ListTotals, ListColumns} from "./";

const ListContent = () => {
    const {list} = useListContext();
    return (
        <section>
            <ListColumns/>
            {
                list.map((item) => {
                    return <ListItem key={item.id}{...item}/>
                })
            }

            <ListTotals/>

        </section>

    )

}

export default ListContent