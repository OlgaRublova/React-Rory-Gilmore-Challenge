import React from "react";
import ListColumns from "./ListColumns";
import {useListContext} from "../context/list_context";
import ListItem from "./ListItem";
import ListTotals from "./ListTotals";

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