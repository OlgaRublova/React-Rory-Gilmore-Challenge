import {useParams} from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect} from "react"

import BookItemComponent from "../components/book-item/book-item.component";
import AverageRatingComponent from "../components/average-rating/average-rating.component";
import SingleReviewComponent from "../components/single-review/single-review.component";


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


    let {numRatings, avgRating} = reviewsStats || 0;


    return (
        <section className="single-book-page">
            <BookItemComponent singleBook={singleBook}/>

            <div className="reviews-container">
                <AverageRatingComponent numRatings={numRatings} avgRating={avgRating} bookId={bookId}/>

                {reviews && reviews.map((review) => {
                    console.log("review: ", review)
                    return (
                        <SingleReviewComponent key={review._id} review={review}/>
                    )
                })}
            </div>
        </section>
    )
}

export default SingleBookPage;