import React, {useState, useEffect, useRef} from "react"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import ButtonComponent from "../components/button/button.component";
import BookSummaryComponent from "../components/book-summary/book-summary.component";
import {useAuthContext} from "../context/auth_context";

const EditReview = () => {
    const reviewId = useParams();
    const navigate = useNavigate();
    const [review, setReview] = useState([]);
    const [ratingsQuantity, setRatingsQuantity] = useState(5)
    const [singleBook, setSingleBook] = useState([]);

    const user = useAuthContext();



    const initialValues = {
        headline: review.headline,
        detail: review.detail,
        ratingsQuantity: review.ratingsQuantity
    };

    const [values, setValues] = useState(initialValues);

    const inputHeadline = useRef(values.headline);
    const inputDetail = useRef(values.detail);
    const inputUserId = useRef();

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
            detail: inputDetail.current.value,
            ratingsQuantity
        }

        try {
            await axios.put(`http://localhost:8000/reviews/${reviewId.id}`, editedReview);
            navigate(`/books/${review.bookId}`)

        } catch (err) {
            console.log(err)
        }
    }


    const ratingChanged = (newRating) => {
        setRatingsQuantity(newRating)
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    return (
        <section>
            <form className="review__container">

                <BookSummaryComponent ratingChanged={ratingChanged} singleBook={singleBook}/>

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
                    ref={inputDetail}
                    value={values.detail}
                    name="detail"
                    onChange={handleInputChange}
                    maxLength="2000"
                />
                <div className="btn-primary-box">
                    <ButtonComponent buttonType="inverted" onClick={() => navigate(`/books/${review.bookId}`)}>Go Back</ButtonComponent>
                    <ButtonComponent buttonType="primary" onClick={editReview}>Edit
                        Review</ButtonComponent>
                </div>
            </form>
        </section>
    );
};

export default EditReview;