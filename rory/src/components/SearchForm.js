import {useGlobalContext} from "../contex";

const SearchForm = () => {

    const {answer, query, setQuery} = useGlobalContext();

    return (
       answer && <>
            <article className="section-text">
                <div className="section-text__header">Great!</div>
                <div className="section-text__sub">Check if your favourite book is in the list</div>
            </article>

            <form
                className="section-heading"
                onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="form-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
        </>
    )

}

export default SearchForm;