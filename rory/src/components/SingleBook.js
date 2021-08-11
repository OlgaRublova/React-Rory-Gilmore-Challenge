import {useParams, Link} from "react-router-dom"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/all";
import data from "./data"
import {BiBook} from "react-icons/all";

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

    const {title, cover, firstName, lastName, genre, page} = data[result];

    const prevBook = () => {
    }
    const nextBook = () => {
    }

    return (
        <>


            <section className="single-book">
                <div className="arrows">
                    <button className="arrow-btn" onClick={prevBook}><AiOutlineArrowLeft/></button>
                    <button className="arrow-btn" onClick={nextBook}><AiOutlineArrowRight/></button>
                </div>

                <Link to="/" className="btn-primary">Back to books</Link>

                <h2 className="section-heading">{title}</h2>
                <img src={cover} alt={title}/>
                <div className="single-book-info">

                    <p><span className="book-data">Author:</span>{firstName} {lastName}</p>
                    <p><span className="book-data">Genre:</span> {genre}</p>
                    <p><span className="book-data">Count:</span> {page} pages</p>
                </div>
            </section>
        </>

    )
}

export default SingleBook;