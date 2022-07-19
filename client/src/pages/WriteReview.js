import React, {useState, useEffect, useRef} from "react"
import axios from "axios";
import {useParams, useHistory} from "react-router-dom"
import {useUserContext} from "../context/user_context";
import ReactStars from "react-rating-stars-component";

const WriteReview = () => {
    const bookId = useParams();
    const history = useHistory();

    const [singleBook, setSingleBook] = useState([]);
    // const [file, setFile] = useState([]);
    const [ratingsQuantity, setRatingsQuantity] = useState(5)

    let {title, cover, firstName, lastName} = singleBook;
    const user = useUserContext();

    const inputHeadline = useRef();
    const inputText = useRef();
    const inputUserId = useRef();


    const postReview = async (e) => {
        e.preventDefault();
        const newReview = {
            userId: inputUserId.current.value,
            bookId: bookId.id,
            headline:inputHeadline.current.value,
            detail:inputText.current.value,
            ratingsQuantity
        }

        try{
            await axios.post(`http://localhost:8000/reviews/${bookId.id}`, newReview);
            history.push(`/books/${bookId.id}`);

        }catch(err){
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
                <input type="text" ref={inputHeadline} id="review__headline" maxLength="60"
                       placeholder="Sum up your experience in a few simple words."/>
                <input type="text" ref={inputText} id="review__text" maxLength="2000"
                       placeholder="What do you like best or least?"/>

                {/*<label htmlFor="file">Photo or Video: </label>*/}
                {/*<input type="file" id="file" accept=".png, .jpeg, .jpg"*/}
                {/*       onChange={(e) => setFile(e.target.files)}/>*/}

                <button className="btn-primary" type="submit" onClick={postReview}>Submit Review</button>
            </form>
        </section>
    );
};

export default WriteReview;