import {useGlobalContext} from "../contex";
import {useEffect} from "react";

const Pages = () => {
    const {
        paginatedBooks,
        prevPage,
        nextPage,
        handlePage,
        page
    } = useGlobalContext();


    return (
        <section className="btn-container--page">
            <button className="prev-btn" onClick={prevPage}>prev</button>
            {
                paginatedBooks.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={`page-btn ${index === page ? 'active-btn' : null}`}
                            onClick={() => {
                                handlePage(index)
                            }}>
                            {index + 1}
                        </button>
                    )
                })
            }
            <button className="next-btn" onClick={nextPage}>next</button>
        </section>
    )
}

export default Pages;