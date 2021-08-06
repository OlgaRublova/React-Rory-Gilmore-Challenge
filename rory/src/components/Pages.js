import {useGlobalContext} from "../contex";

const Pages = () => {
const {data, prevPage, nextPage, handlePage, page, answer} = useGlobalContext();

    return(
        answer && <section className="btn-container--page">
            <button className="prev-btn" onClick={prevPage}>prev</button>
            {
                data.map((item, index) => {
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