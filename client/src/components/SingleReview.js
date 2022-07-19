import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"

import {BsFillHeartFill, BiEdit, AiFillDelete} from "react-icons/all";
import ReactStars from "react-rating-stars-component";
import {format} from "timeago.js";
import axios from "axios";

import {useReviewContext} from "../context/review_context";


const SingleReview = ({review}) => {
        const [like, setLike] = useState(review.likes.length);
        const [isLiked, setIsLiked] = useState(false);
        const {removeReview} = useReviewContext();
        const [user, setUser] = useState({})

        const {_id, headline, detail, ratingsQuantity, createdAt, userId} = review;

        const {username, profilePicture} = user;


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
            <div className="single-review-container">
                <ReactStars
                    value={ratingsQuantity}
                    count={5}
                    size={22}
                    activeColor="#ffd700"
                    isHalf={false}
                    edit={false}
                />
                <div className="single-review">
                    <h1>{headline}</h1>
                    <div>{detail}</div>
                    <div className="single-review__buttons">
                        <div className="single-review__buttons--like-btn">
                            <BsFillHeartFill
                                onClick={likeHandler}
                                className={isLiked ? "favorite" : null}
                            />
                            <span>{like} like(s)</span>
                        </div>
                        {
                            user._id == userId &&
                            <>
                                <Link to={`/edit/${_id}`}>
                                    <BiEdit className="single-review__buttons--edit-btn"/>
                                </Link>
                                <AiFillDelete className="single-review__buttons--like-btn"
                                              onClick={() => removeReview(_id)}/>
                            </>
                        }
                    </div>

                </div>
                <div className="user__info">
                    <div className="user__info__fullName">{username}</div>
                    <div className="user__info__picture"><img src={profilePicture} alt={username}/></div>
                    <div className="user__info__date">{format(createdAt)}</div>
                </div>

            </div>
        );
    }
;

export default SingleReview;