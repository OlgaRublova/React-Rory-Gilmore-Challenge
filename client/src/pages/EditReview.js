import React, {useState, useEffect, useRef} from "react"
import axios from "axios";
import {useParams, useHistory} from "react-router-dom"
import {useUserContext} from "../context/user_context";
import ReactStars from "react-rating-stars-component";

const EditReview = () => {
    const reviewId = useParams();
    const history = useHistory();
    const inputHeadline = useRef();
    const inputText = useRef();
    const inputUserId = useRef();
    const user = useUserContext();

    const [review, setReview] = useState([]);
    const [ratingsQuantity, setRatingsQuantity] = useState(5)
    const [singleBook, setSingleBook] = useState([]);
    let {title, cover, firstName, lastName} = singleBook;


    const initialValues = {
        headline: review.headline,
        detail: review.detail,

    };

    const [values, setValues] = useState(initialValues);


    useEffect(() => {
        const fetchReview = async () => {
            const res = await axios.get(`http://localhost:8000/reviews/find/${reviewId.id}`);
            setReview(res.data[0]);


        }
        fetchReview();
    }, [reviewId])


    useEffect(() => {
        const fetchBook = async () => {
            const res = await axios.get(`http://localhost:8000/books/find/${review.bookId}`);
            setSingleBook(res.data[0]);
        }
        fetchBook();
    }, [review.bookId])

    const editReview = async (e) => {
        e.preventDefault();

        const editedReview = {
            userId: inputUserId.current.value,
            headline: inputHeadline.current.value,
            detail: inputText.current.value,
            ratingsQuantity
        }

        try {
            await axios.put(`http://localhost:8000/reviews/${reviewId.id}`, editedReview);
            history.go(-1);

        } catch (err) {
            console.log(err)
        }
    }


    const ratingChanged = (newRating) => {
        setRatingsQuantity(newRating)
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });

    };

    return (
        <section>
            <form className="review__container">
                <div className="book_summary">
                    <div className="book-summary__cover">
                        <img src={cover} alt={title}/>
                    </div>
                    <div className="book-summary__title">{title}</div>
                    <div className="book-summary__author">{firstName} {lastName}</div>
                </div>

                <span>Overall Rating: </span>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    half
                />


                <input type="hidden" ref={inputUserId} value={user.user.user._id}/>
                <input
                    type="text"
                    ref={inputHeadline}
                    value={values.headline}
                    name="headline"
                    onChange={handleInputChange}
                    maxLength="60"
                />
                <input
                    type="text"
                    ref={inputText}
                    value={values.detail}
                    name="detail"
                    onChange={handleInputChange}
                    maxLength="2000"
                />

                <button className="btn-primary" type="submit" onClick={editReview}>Edit Review</button>
            </form>
        </section>
    );
};

export default EditReview;