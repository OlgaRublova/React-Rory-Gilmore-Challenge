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
        findBook(searchTerm);
        setTimeout(function () {
            findBook(searchTerm);
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    return (
            <form className="input-form-container"
                  onSubmit={handleSubmit}>
                <input
                    type="search"
                    ref={searchValue}
                    onChange={(e) => setSearchTerm(searchValue.current.value)}
                    placeholder="Enter the book/author you want to find"
                />
            </form>
    )
}


export default SearchForm;