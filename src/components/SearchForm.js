import React, {useRef, useEffect, useState} from "react";
import {MdSearch} from "react-icons/all";
import {useFilterContext} from "../context/filter_context"

const SearchForm = () => {
    const {findBook, error, toggleError} = useFilterContext()
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
            <article className="section-info">
                <div className="section-info__heading">Check if <span>your favourite book</span> is in the list</div>
            </article>
            <div className="errorMessage">{show && <p>{msg}</p>}</div>


            <form className="input-search-form-wrapper"
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