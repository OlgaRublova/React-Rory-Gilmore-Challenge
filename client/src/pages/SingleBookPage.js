import {useParams, Link} from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect, useRef} from "react"
import {MdSearch} from "react-icons/all";

import SingleReview from "../components/SingleReview";

const SingleBookPage = () => {

    //  get id from url
    const params = useParams(); //  return a string

    const [singleBook, setSingleBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus()
    }, []);

    useEffect(() => {
        // findReview(searchTerm)
    }, [searchTerm]);

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
        <section className="single-book-page-container">
            <div className="single-book-container">
                <button className="back_to_all_books-button">
                    <Link to="/books" className="back_to_all_books-button__link">Back to books</Link>
                </button>
                <h2 className="single-book-container__title">{title}</h2>
                <img className="single-book-container__cover" src={cover} alt={title}/>
                <div className="single-book-container__info">
                    <p><span className="single-book-container__info-button">Author:</span> {firstName} {lastName}</p>
                    <p><span className="single-book-container__info-button">Genre:</span> {genre}</p>
                    <p><span className="single-book-container__info-button">Count:</span> {page} pages</p>
                </div>
            </div>


            <div className="reviews-container">
                <div className="review-container__rating-container">
                    <p className="subtitle fancy">
                        <span className="rating-container__title"> User Reviews </span>
                    </p>
                    <div className="rating-container__rating-box-container">
                        <div className="rating-box-container__box">
                            stars
                        </div>
                        <div className="rating-box-container__bar">
                            bar scores
                        </div>
                    </div>
                </div>

                <div className="reviews-container__write-review-container">
                    <button className="write-review__button">write a review</button>
                    <div className="write-review__user-photos">
                        <p>photos</p>
                        <p>photos</p>
                        <p>photos</p>
                    </div>
                </div>

                <div className="reviews-container__filter">
                    <div className="reviews-container__filter__search-form">
                        <form className="input-search-form-wrapper">
                            <input
                                type="text"
                                ref={searchValue}
                                onChange={(e) => setSearchTerm(searchValue.current.value)}
                            />
                            <MdSearch style={{"marginLeft": "1rem"}}/>
                        </form>
                    </div>
                    <div className="reviews-container__filter__sort">
                        <select name="sort" id="sort">
                            <option value="highest">Highest Rating</option>
                            <option value="lowest">Lowest Rating</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>

                </div>

                <SingleReview/>

            </div>

        </section>
    )
}

export default SingleBookPage;