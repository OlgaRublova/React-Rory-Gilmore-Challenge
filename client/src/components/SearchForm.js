import React, {useRef, useEffect, useState} from "react";
import {useFilterContext} from "../context/filter_context"

const SearchForm = () => {
    const {findBook} = useFilterContext()
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    const searchValue = useRef(null);

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    useEffect(() => {
        findBook(searchTerm);
        setTimeout(function () {
            setSearchTerm("");
            findBook(searchTerm);
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    return (

        <>
            <article className="section-info-global">
                <div className="section-info-global__heading">Check if <span>your favourite book</span> is in the list</div>
            </article>

            <form className="input-form-container"
                  onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={searchValue}
                    onChange={(e) => setSearchTerm(searchValue.current.value)}
                    placeholder="Enter the book/author you want to find"
                />
            </form>
        </>
    )
}


export default SearchForm;