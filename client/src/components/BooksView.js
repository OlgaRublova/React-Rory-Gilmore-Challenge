import React from "react";
import {useFilterContext} from "../context/filter_context"

import {GridView, ListView} from "./index";

const BooksView = () => {
    const { grid_view} = useFilterContext();


    if (grid_view === false) {
        return <ListView />
    }

    return (
        <GridView />
    )
}

export default BooksView;