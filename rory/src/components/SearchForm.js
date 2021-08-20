import {useGlobalContext} from "../contex";
import {MdSearch} from "react-icons/all";
import {useRef, useEffect, useState} from "react";
import {useFilterContext} from "../context/filter_context";

const SearchForm = () => {
    const {filtered_books: books, findBook, error, toggleError} = useFilterContext()
    console.log("SearchForm - error")
    console.log(error)
    const {show, msg} = error;

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    useEffect(() => {
        findBook(searchTerm)
    }, [searchTerm]);


    useEffect(() => {
        toggleError("true", "Enter the book/author you want to find")
    }, [])

    return (

        <>

            <article className="section-text">
                <div className="section-text__header">Great!</div>
                <div className="section-text__sub">Check if your favourite book is in the list</div>
            </article>
            <div className="errorMessage">{show && <p>{msg}</p>}</div>


            <form className="form-control"
                  onSubmit={handleSubmit}>
                <MdSearch style={{"marginLeft": "1rem"}}/>
                <input
                    type="text"
                    ref={searchValue}
                    onChange={(e) => setSearchTerm(searchValue.current.value)}
                />
                <button>search</button>


            </form>
        </>
    )
}


export default SearchForm;