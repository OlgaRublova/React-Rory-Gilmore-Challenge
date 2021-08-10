import {useGlobalContext} from "../contex";
import {MdSearch} from "react-icons/all";
import {useRef, useEffect} from "react";

const SearchForm = () => {

    const {error, toggleError, books, setBooks, setSearchTerm} = useGlobalContext();

    const handleSubmit = e => {
        e.preventDefault();
        toggleError(true, "sorry, there is no book like that")
    }

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    const searchBook = () => {
        setSearchTerm(searchValue.current.value);
    }
    const handleBookSearch = (title, lastName, firstName) => {
        const specificBooks = books.find(book => {
            return (book.title === title) || (book.lastName === lastName) || (book.firstName === firstName)
        })
        setBooks(specificBooks)

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
                        onChange={searchBook}
                    />
                    <button onClick={handleBookSearch}>search</button>
                </div>

            </form>
        </>
    )
}


export default SearchForm;