import {useParams, Link} from "react-router-dom"
import data from "./data"
const SingleBook = () => {
    let {id} = useParams(),
        result,
        index = 0;

    data.forEach(function check(el, index, array) {
        if (el.id == id) {
            result = index;
        } else {
            index++;
        }
    })

    const {title, cover, firstName, lastName} = data[result];

    return (
        <section className="single-book">

            <h2>SingleBook</h2>
            <img src={"/" + cover} alt={title}/>
            <div className="single-movie-info">
                <h2>{title}</h2>
                <p>{firstName}{lastName}</p>
            </div>
        </section>
    )
}

export default SingleBook;