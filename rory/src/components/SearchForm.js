import {useGlobalContext} from "../contex";
import {MdSearch} from "react-icons/all";
import {useRef, useEffect, useState} from "react";
import bookList from "./data.js"

const SearchForm = () => {
    const {error, toggleError, books, setBooks} = useGlobalContext();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        toggleError(true, "sorry, there is no book like that")
    }

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    useEffect(() => {
        findBooks(searchTerm)
        console.log("Use effect - books");
        console.log(books)

    }, [searchTerm]);

    const findBooks = (searchItem) => {
        let specificBooks = bookList.filter(book => {
            const {title, firstName, lastName} = book;

            return (
                title.toString().toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                firstName.toString().toLowerCase().includes(searchItem.toString().toLowerCase()) ||
                lastName.toString().toLowerCase().includes(searchItem.toString().toLowerCase())
            )
        });

        setBooks(specificBooks);
    }


    return (
        <>

            <article className="section-text">
                <div className="section-text__header">Great!</div>
                <div className="section-text__sub">Check if your favourite book is in the list</div>
            </article>
            <div className="errorMessage">{error.show && <p>{error.msg}</p>}</div>


            <form
                className="section-heading"
                onSubmit={handleSubmit}>
                <div className="form-control">
                    <MdSearch/>
                    <input
                        type="text"
                        ref={searchValue}
                        onChange={(e) => setSearchTerm(searchValue.current.value)}

                    />
                    <button>search</button>
                </div>

            </form>
        </>
    )
}


export default SearchForm;