import {useParams, Link} from "react-router-dom"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/all";
import data from "../components/data"
import {useEffect} from "react";
import React from "react";

const SingleBookPage = () => {


    let {id} = useParams(),
        result,
        index = 0;

    data.forEach(function checkResult(el) {
        if (el.id === Number(id)) {
            result = index;
        } else {
            index++;
        }
    });



    const handleClick = type => {

        if (type === "next") {
            result = result + 1;
            id = result;
            // console.log("plus: ")
            // console.log(result)
            // console.log("id plus: ")
            // console.log(id)
        }
        if (type === "prev") {
            result = result - 1
            // console.log("minus: ")
            // console.log(result)
            // console.log("id minus: ")
            // console.log(id)

        }
        return result
    }



    // console.log("basic: ")
    // console.log(result)


    let {title, cover, firstName, lastName, genre, page} = data[result];

    return (

        <section className="single-book">
            <div className="single-book-arrows">
                <button className="single-book-arrow">
                    <AiOutlineArrowLeft onClick={() => handleClick("prev")}/>
                </button>
                <button className="single-book-arrow">
                    <AiOutlineArrowRight onClick={() => handleClick("next")}/>
                </button>
            </div>

            <Link to="/books" className="btn-primary">Back to books</Link>

            <h2 className="section-heading">{title}</h2>
            <img src={cover} alt={title}/>
            <div className="single-book-info">

                <p><span className="book-data">Author:</span> {firstName} {lastName}</p>
                <p><span className="book-data">Genre:</span> {genre}</p>
                <p><span className="book-data">Count:</span> {page} pages</p>
            </div>
        </section>


    )
}

export default SingleBookPage;