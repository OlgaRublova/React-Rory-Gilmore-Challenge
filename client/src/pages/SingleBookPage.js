import {useParams, Link} from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect} from "react"

import SingleReview from "../components/SingleReview";

import ReactStars from "react-rating-stars-component";
import {BarChart, Bar, XAxis, YAxis} from 'recharts';


const SingleBookPage = () => {
    //  get id from url
    const bookId = useParams();
    const [singleBook, setSingleBook] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewsStats, setReviewsStats] = useState([]);

    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios
            .get(`http://localhost:8000/books/${bookId.id}`)
            .then(res => {
                setSingleBook(...singleBook, res.data[0])
            })
            .catch(err => console.log(err))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookId])

    useEffect(() => {
        const fetchReviews = async () => {

            await axios
                .get(`http://localhost:8000/reviews/${bookId.id}`)
                .then(res => {
                    setReviews(...reviews, res.data.reviews)
                    setReviewsStats(...reviewsStats, res.data.reviewsStats[0])
                })
        }

        fetchReviews();
    }, [bookId])

    useEffect(() => {
        const fetchUsers = async () => {
            await axios
                .get(`http://localhost:8000/users/${bookId.id}`)
                .then(res => {
                    setUsers(...users, res.data)
                })
        }
        fetchUsers();
    }, [bookId])


    let {title, cover, firstName, lastName, genre, page} = singleBook;
    let {numRatings, avgRating} = reviewsStats || 0;

    const data = [
        {name: 1, reviewCount: numRatings},
        {name: 2, reviewCount: numRatings},
        {name: 3, reviewCount: numRatings},
        {name: 4, reviewCount: numRatings},
        {name: 5, reviewCount: numRatings}
    ];

    return (
        <section className="single-book-page">
            <div className="book-container">
                <img className="book__cover" src={cover} alt={title}/>
                <div className="book__info">
                    <div className="book__info__item">
                        <div className="book__info__item--name">Author:</div>
                        <div className="book__info__item--value">{firstName} {lastName}</div>
                    </div>
                    <div className="book__info__item">
                        <div className="book__info__item--name">Title:</div>
                        <div className="book__info__item--value">{title}</div>
                    </div>
                    <div className="book__info__item">
                        <div className="book__info__item--name">Genre:</div>
                        <div className="book__info__item--value">{genre}</div>
                    </div>
                    <div className="book__info__item">
                        <div className="book__info__item--name">Count:</div>
                        <div className="book__info__item--value">{page} pages</div>
                    </div>
                </div>
            </div>

            <div className="reviews-container">
                <div className="average-rating-container">
                    <div className="average-rating-summary">
                        <div className="average-rating__number">
                            {avgRating ? avgRating.toFixed(2) : "N/A"}
                        </div>
                        <div className="average-rating__star">
                            {
                                avgRating && <ReactStars
                                    count={5}
                                    value={avgRating}
                                    size={24}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    edit={false}
                                />
                            }
                        </div>
                        <div className="average-rating__count">
                            <span>Based on {Number(numRatings) ? Number(numRatings).toFixed(0) : "N/A"} review(s)</span>
                        </div>
                    </div>
                    <div className="average-rating__breakdown">
                        <BarChart width={250} height={100} data={data}>
                            <Bar dataKey="reviewCount" fill="blue"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </BarChart>


                    </div>
                    <div className="submit-review-container">
                        <Link to={`/write/${bookId.id}`} style={{textDecoration: "none"}}>
                            <div className="btn-primary">Write A Review</div>
                        </Link>
                        <div className="submit-review-container-text">Share your experience to help others</div>
                    </div>
                </div>


                {reviews && reviews.map((review) => {
                    return (
                        <SingleReview key={review._id} review={review}/>
                    )
                })}
            </div>


        </section>
    )
}

export default SingleBookPage;