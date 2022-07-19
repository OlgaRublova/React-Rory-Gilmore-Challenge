const filter_reducer = (state, action) => {

    if (action.type === "LOAD_BOOKS") {
        return {
            ...state,
            all_books: [...action.payload],
            filtered_books: [...action.payload],
            filters: {
                ...state.filters,
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
        let {sort} = state;
        let tempBooks = [...state.all_books];

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
    }


    if (action.type === "FILTER_BOOKS") {
        const {genre, pulitzer_prize, book_size} = state.filters;
        let tempBooks = [...state.filtered_books];

        if (genre !== 'all') {
            tempBooks = tempBooks.filter(book => book.genre === genre)
        }

        if (pulitzer_prize) {
            tempBooks = tempBooks.filter(book => book.pulitzer)
        }
        if (book_size !== "ALL") {
            if (book_size === "XS") {
                tempBooks = tempBooks.filter(book => book.page <= 100)
            }
            if (book_size === "S") {
                tempBooks = tempBooks.filter(book => book.page <= 300 && book.page > 100)
            }
            if (book_size === "M") {
                tempBooks = tempBooks.filter(book => book.page <= 400 && book.page > 300)
            }
            if (book_size === "L") {
                tempBooks = tempBooks.filter(book => book.page <= 500 && book.page > 400)
            }
            if (book_size === "XL") {
                tempBooks = tempBooks.filter(book => book.page > 800)
            }
        }
        return {
            ...state,
            filtered_books: tempBooks,
            genre,
            pulitzer_prize,
            book_size
        }
    }


    if (action.type === "FIND_BOOK") {
        const {searchItem, books} = action.payload;

        let specificBooks = books.filter(book => {
            const {title, firstName, lastName} = book;

            return (
                title.toString().toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                firstName.toString().toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                lastName.toString().toLowerCase().includes(searchItem.toString().toLowerCase())
            )
        });

        return {
            ...state, filtered_books: specificBooks
        }
    }

}

export default filter_reducer
