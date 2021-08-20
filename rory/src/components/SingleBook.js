import {useParams, Link} from "react-router-dom"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/all";
import data from "./data"
import {useEffect} from "react";

const SingleBook = () => {


    let {id} = useParams(),
        result,
        index = 0;

    data.forEach(function checkResult(el) {
        if (el.id == id) {
            result = index;
        } else {
            index++;
        }
    });


    useEffect(() => {


    }, [index])





    let {title, cover, firstName, lastName, genre, page, info} = data[result];


    return (

            <section className="single-book">
                <div className="arrows">
                    <button className="arrow-btn"><AiOutlineArrowLeft/></button>
                    <button className="arrow-btn"><AiOutlineArrowRight/></button>
                </div>

                <Link to="/" className="btn-primary">Back to books</Link>

                <h2 className="section-heading">{title}</h2>
                <img src={cover} alt={title}/>
                <div className="single-book-info">

                    <p><span className="book-data">Author:</span> {firstName} {lastName}</p>
                    <p><span className="book-data">Genre:</span> {genre}</p>
                    <p><span className="book-data">Count:</span> {page} pages</p>
                    <p><span className="book-data">Info:</span> {info} </p>
                </div>
            </section>


    )
}

export default SingleBook;