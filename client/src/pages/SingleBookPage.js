import {useParams, Link} from "react-router-dom"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/all";
import data from "../components/data"
import axios from "axios";
import React, { useState, useEffect } from "react"

const SingleBookPage = () => {

    //  get id from url
    const params = useParams(); //  return a string

    const [singleBook, setSingleBook] = useState([]);

    useEffect(() => {

        axios
            .get(`http://localhost:8000/books/${params.id}`)
            .then(res => {
                setSingleBook(...singleBook, res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.id])


    let {title, cover, firstName, lastName, genre, page} = singleBook;

    return (

        <section className="single-book">
            <div className="single-book-arrows">
                <button className="single-book-arrow">
                    <AiOutlineArrowLeft/>
                </button>
                <button className="single-book-arrow">
                    <AiOutlineArrowRight/>
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