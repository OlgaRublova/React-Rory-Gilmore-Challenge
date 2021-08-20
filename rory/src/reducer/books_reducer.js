const books_reducer = (state, action) => {

    if (action.type === "GET_BOOKS_BEGIN") {
        return {...state, books_loading: true}
    }

    if (action.type === "GET_BOOKS_SUCCESS") {
        return {
            ...state,
            books_loading: false,
            books: action.payload,
        }
    }

    if (action.type === "GET_BOOKS_ERROR") {
        return {
            ...state,
            books_error: true,
            books_loading: false,
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)

}

export default books_reducer