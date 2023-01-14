import React, {useState, useEffect, useRef} from "react"
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import ButtonComponent from "../components/button/button.component";
import BookSummaryComponent from "../components/book-summary/book-summary.component";
import {useAuthContext} from "../context/auth_context";

const WriteReview = () => {
    const bookId = useParams();
    const user = useAuthContext();
    const userId = user.user.uid ? user.user.uid : user.user.user._id;
    const navigate = useNavigate();

    const [singleBook, setSingleBook] = useState([]);
    const [ratingsQuantity, setRatingsQuantity] = useState(5)

    const inputHeadline = useRef();
    const inputText = useRef();




    const postReview = async (e) => {
        e.preventDefault();
        const newReview = {
            userId: userId,
            bookId: bookId.id,
            headline: inputHeadline.current.value,
            detail: inputText.current.value,
            ratingsQuantity
        }

        try {
            await axios.post(`http://localhost:8000/reviews/${bookId.id}`, newReview);
            navigate(`/books/${bookId.id}`);

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/books/${bookId.id}`)
            .then(res => {
                setSingleBook(...singleBook, res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bookId])

    const ratingChanged = (newRating) => {
        setRatingsQuantity(newRating)
    };

    return (

        <section>
            <form className="review__container">
                <BookSummaryComponent ratingChanged={ratingChanged} singleBook={singleBook}/>
                <input type="hidden" value={userId}/>
                <input type="text" ref={inputHeadline} maxLength="60"
                       placeholder="Sum up your experience in a few simple words."/>
                <input type="text" ref={inputText} maxLength="2000"
                       placeholder="What do you like best or least?"/>


                <div className="btn-primary-box">
                    <ButtonComponent buttonType="inverted" type="submit"
                                     onClick={() => navigate(`/books/${bookId.id}`)}>Go Back</ButtonComponent>
                    <ButtonComponent buttonType="primary" type="submit" onClick={postReview}>Submit
                        Review</ButtonComponent>
                </div>

            </form>
        </section>
    );
};

export default WriteReview;