import paginate from "../components/utils";


const filter_reducer = (state, action) => {

    if (action.type === "LOAD_BOOKS") {
        let maxLength, minLength, bookLength;
        bookLength = action.payload.map(book => book.page);
        maxLength = Math.max(...bookLength);
        minLength = Math.min(...bookLength);

        return {
            ...state,
            filtered_books: [...action.payload],
            all_books: [...action.payload],
            likes: [...action.payload],
            filters: {
                ...state.filters,
                max_length: maxLength,
                min_length: minLength
            }
        }
    }

    if (action.type === "UPDATE_SORT") {
        return {
            ...state,
            sort: action.payload
        }
    }

    if (action.type === "UPDATE_FILTERS") {
        const {name, value} = action.payload;

        return {
            ...state,
            filters: {...state.filters, [name]: value}
        }
    }

    if (action.type === "SORT_BOOKS") {
        const {sort, filtered_books} = state;
        if (filtered_books) {
            let tempBooks = [...filtered_books];

            if (sort === 'page-lowest') {
                tempBooks = tempBooks.sort((a, b) => a.page - b.page);
            }
            if (sort === 'page-highest') {
                tempBooks = tempBooks.sort((a, b) => b.page - a.page);
            }

            if (sort === 'name-a') {
                tempBooks = tempBooks.sort((a, b) => a.lastName.localeCompare(b.lastName));
            }

            if (sort === 'name-z') {
                tempBooks = tempBooks.sort((a, b) => b.lastName.localeCompare(a.lastName));
            }

            return {
                ...state,
                filtered_books: tempBooks
            }
        } else {
            return {
                ...state,
                filtered_books: []
            }
        }

    }

    if (action.type === "FILTER_BOOKS") {
        const {all_books} = state;
        const {genre, pulitzer_prize} = state.filters;

        let tempBooks = [...all_books];

        if (genre !== 'all') {
            tempBooks = tempBooks.filter(book => book.genre === genre)
        }

        if (pulitzer_prize) {
            tempBooks = tempBooks.filter(book => book.pulitzer)
        }
        return {
            ...state,
            filtered_books: tempBooks,
            genre,
            pulitzer_prize
        }
    }


    if (action.type === "REMOVE_BOOK") {
        const {filtered_books} = state;
        let tempBooks = [...filtered_books];
        let newBooks = tempBooks.filter((book) => book.id !== action.payload)
        return {
            ...state, filtered_books: newBooks
        }
    }

// if (action.type === "FILTER_PULITZER_BOOKS") {
//     const {filtered_books, all_books} = state;
//     let tempBooks = [...filtered_books];
//
//     if (action.payload) {
//         tempBooks = tempBooks.filter((book) => (book.pulitzer));
//         return {
//             ...state,
//             filtered_books: tempBooks
//         }
//     } else {
//         return {
//             ...state,
//             filtered_books: all_books
//         }
//     }
// }


    if (action.type === "LIKE_BOOK") {
        return {
            ...state,
            filtered_books: action.payload,
            likes: action.payload
        }
    }
    if (action.type === "CHECK_BOOK") {
        return {
            ...state,
            filtered_books: action.payload,
            checked: action.payload
        }
    }

    if (action.type === "FIND_BOOK") {
        const {searchItem, books} = action.payload;

        let specificBooks = books.filter(book => {
            const {title, firstName, lastName} = book;

            return (
                title.toString().toLowerCase().startsWith(searchItem.toString().toLowerCase()) ||
                firstName.toString().toLowerCase().startsWith(searchItem.toString().toLowerCase()) ||
                lastName.toString().toLowerCase().startsWith(searchItem.toString().toLowerCase())
            )
        });

        if (specificBooks.length < 1) {
            return {
                ...state,
                error: {
                    ...state.error,
                    show: true,
                    msg: "There is no book author like this. Try again!"
                }
            }
        } else {
            return {
                ...state, filtered_books: specificBooks
            }
        }
    }


    if (action.type === "PAGINATE_BOOKS") {
        let {genre, filtered_books, pagination} = state;
        let paginated_books_new;

        if (genre === "all" && pagination) {
            console.log(pagination)
            paginated_books_new = paginate(action.payload.books)
        } else {
            paginated_books_new = paginate(filtered_books);
        }

        return {
            ...state,
            paginated_books: paginated_books_new,
        }
    }


    if (action.type === "PAGINATE_BOOKS_TO_PAGE") {
        const {paginated_books, page} = state;

        return {
            ...state,
            filtered_books: paginated_books[page]
        }
    }

    if (action.type === "SET_PREV_BOOK") {
        let {paginated_books} = state;
        let newPage = action.payload - 1;

        if (action.payload < 0) {
            newPage = paginated_books.length - 1
        }

        return {
            ...state,
            page: newPage
        }
    }
    if (action.type === "SET_NEXT_BOOK") {
        let {paginated_books} = state;
        let newPage = action.payload + 1;

        if (action.payload > paginated_books.length - 1) {
            newPage = 0
        }

        return {
            ...state,
            page: newPage
        }
    }
    if (action.type === "SET_INDEX") {
        return {
            ...state,
            page: action.payload,
        }
    }
    if (action.type === "SET_PAGINATION") {
        console.log("set pagination")
        return {
            ...state,
            pagination: true,
        }
    }

    if (action.type === "TOGGLE_ERROR") {

        let {show, msg} = action.payload;

        return {
            ...state,
            error: {
                ...state.error,
                show,
                msg
            },
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
