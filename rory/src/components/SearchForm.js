import {useGlobalContext} from "../contex";
import {MdSearch} from "react-icons/all";

const SearchForm = () => {

    const {error, toggleError, query, setQuery} = useGlobalContext();

    const handleSubmit = e => {
        e.preventDefault();
        toggleError(true, "sorry, there is no book like that")
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
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">search</button>
                </div>

            </form>
        </>
    )
}


export default SearchForm;