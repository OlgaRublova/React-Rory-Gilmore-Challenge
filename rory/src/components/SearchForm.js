import {useGlobalContext} from "../contex";

const SearchForm = () => {

    const {query, setQuery} = useGlobalContext();

    return (
        <form
            className="section-heading"
            onSubmit={(e) => e.preventDefault()}>
            <h2>Check if your favourite book is in the list</h2>
            <input
                type="text"
                className="form-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    )
}

export default SearchForm;