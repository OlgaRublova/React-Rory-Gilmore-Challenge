const review_reducer = (state, action) => {
    switch (action.type) {

        case "REMOVE_REVIEW":


            const tempList = state.reviews.filter((item) => {
                return item._id !== action.payload
            })

            return {...state, reviews: tempList}

        default:
            return state

    }
}


export default review_reducer