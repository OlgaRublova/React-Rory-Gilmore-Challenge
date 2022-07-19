const list_reducer = (state, action) => {

    switch (action.type) {
        case "TOGGLE_LIST":
            const {_id, firstName, lastName, title, cover} = action.payload;

            const newItem = {
                _id,
                firstName,
                lastName,
                title,
                cover,
            }


            const isFound = state.checked_items.some(item => {
                if (action.payload._id === item._id) {
                    const tempList = state.checked_items.filter((item) => {
                        return item.id !== action.payload
                    })
                    return {
                        ...state,
                        checked_items: tempList
                    }
                }
            })
            if (!isFound) {
                return {
                    ...state,
                    checked_items: [...state.checked_items, newItem]
                }
            }

            return {...state}

        // case "ADD_TO_LIST":
        //     const {_id, firstName, lastName, title, cover} = action.payload;
        //
        //     const newItem = {
        //         _id,
        //         firstName,
        //         lastName,
        //         title,
        //         cover,
        //     }
        //
        //     const isFound = state.checked_items.some(item => {
        //         if (action.payload._id === item._id) {
        //             return true;
        //         }
        //     })
        //
        //     if (!isFound) {
        //         return {
        //             ...state,
        //             checked_items: [...state.checked_items, newItem]
        //         }
        //     }
        //     return {...state}
        //
        //
        // case "REMOVE_LIST_ITEM":
        //     const tempList = state.total_items.filter((item) => {
        //         return item.id !== action.payload
        //     })
        //     return {
        //         ...state,
        //         checked_items: tempList
        //     }
        case "CLEAR_LIST":
            return {
                ...state,
                checked_items: []
            }

        default:
            return state
    }
}


export default list_reducer