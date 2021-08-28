import {useFilterContext} from "../context/filter_context";
import React from "react";

const Pages = () => {
    const {
        paginated_books,
        handlePage,
        page,

    } = useFilterContext();


    return (

          <section className="btn-container--page">
                {
                    paginated_books.map((item, index) => {
                        return (
                            <button

                                key={index}
                                className={`pagination-btn ${index === page ? 'pagination-btn--active' : null}`}
                                onClick={() => {
                                    handlePage(index)
                                }}>
                                {index + 1}
                            </button>
                        )
                    })
                }
            </section>


    )
}

export default Pages;