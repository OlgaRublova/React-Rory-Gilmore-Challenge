const list_reducer = (state, action) => {

    if (action.type === "ADD_TO_LIST") {
        const {id, firstName, lastName, title, genre, page, cover} = action.payload;
        const newItem = {
            id,
            firstName,
            lastName,
            title,
            genre,
            cover,
            page,
        }
        return (
            {
                ...state,
                list: [...state.list, newItem],
            }
        )
    }


    if (action.type === "REMOVE_LIST_ITEM") {
        const tempList = state.list.filter((item) => {
            return item.id !== action.payload
        })
        return {...state, list: tempList}
    }

    if (action.type === "CLEAR_LIST") {
        return {...state, list: []}
    }
    throw new Error(`No Matching "${action.type}" - action type`)

}


export default list_reducer