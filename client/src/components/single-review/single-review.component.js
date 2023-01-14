import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import "./single-review.styles.scss"
import {BsFillHeartFill, BiEdit, AiFillDelete} from "react-icons/all";
import ReactStars from "react-rating-stars-component";
import {format} from "timeago.js";
import axios from "axios";
import {useReviewContext} from "../../context/review_context";
import logo from "../../assets/logo.jpeg"


const SingleReviewComponent = ({review}) => {
        const [like, setLike] = useState(review.likes.length);
        const [isLiked, setIsLiked] = useState(false);
        const {removeReview} = useReviewContext();
        const [user, setUser] = useState({})
        const {photoURL, displayName} = user;

        const {_id, headline, detail, ratingsQuantity, createdAt, userId} = review;

        useEffect(() => {
            setIsLiked(review.likes.includes(user._id));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user._id]);

        useEffect(() => {
            const fetchUser = async () => {
                const res = await axios.get(`http://localhost:8000/users/find/${review.userId}`);
                setUser(res.data);
            }
            fetchUser();
        }, [review.userId])

        console.log("review.userId: ", review.userId)

        const likeHandler = () => {
            try {
                axios.put("/reviews/" + review._id + "/like", {userId: user._id})
            } catch (err) {
                console.log(err)
            }
            setLike(isLiked ? like - 1 : like + 1);
            setIsLiked(!isLiked)
        }


        return (
            <div className="single-review">
                <ReactStars
                    value={ratingsQuantity}
                    count={5}
                    size={22}
                    activeColor="#ffd700"
                    isHalf={false}
                    edit={false}
                />
                <div className="single-review__content">
                    <h1>{headline}</h1>
                    <div>{detail}</div>
                    <div className="single-review__buttons">
                        <div className="single-review__buttons--like">
                            <BsFillHeartFill onClick={likeHandler} className={isLiked ? "favorite" : null}/>
                            <span>{like} like(s)</span>
                        </div>
                        {
                            user._id == userId &&
                            <>
                                <Link to={`/edit/${_id}`}>
                                    <BiEdit className="single-review__buttons--edit"/>
                                </Link>
                                <AiFillDelete className="single-review__buttons--like" onClick={() => removeReview(_id)}/>
                            </>
                        }
                    </div>
                </div>

                <div className="single-review__user">
                    <div className="user__image">{<img src={photoURL || logo} alt=""/>}</div>
                    <div className="user__displayName">{displayName || "Anonymous"}</div>
                    <div className="user__date">{format(createdAt)}</div>
                </div>

            </div>
        );
    }
;

export default SingleReviewComponent;