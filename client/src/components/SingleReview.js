import React, {useEffect, useState} from 'react';
import axios from "axios";
import {format} from "timeago.js";
import Star from "./Star";
import {BsFillHeartFill} from "react-icons/all";

import {useUserContext} from "../context/user_context";

const SingleReview = ({review}) => {
    const [like, setLike] = useState(JSON.parse(localStorage.getItem("like")) || null);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user: currentUser} = useUserContext();

    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(like))
    })

    useEffect(() => {
        setIsLiked(review.likes.includes(currentUser._id));
    }, [currentUser._id, review.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/find/${review.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [review.userId])


    const likeHandler = () => {
        try {
            axios.put("/reviews/" + review._id + "/like", {userId: currentUser._id})
        } catch (err) {
            console.log(err)
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    return (
        <div className="reviews-container__review">
            <div className="review__stars">
                <Star ratingsQuantity={review.ratingsQuantity}/>
            </div>
            <div className="review__info">
                <h1 className="review__info__title">{review.title}</h1>
                <div className="review__info__detail">{review.detail}</div>
                <div className="reviews-container__likes">
                    <BsFillHeartFill
                        className={`!isLiked ? "favourite" : null`}
                        onClick={likeHandler}
                    />
                    <span>{like}  like(s)</span>

                </div>
            </div>
            <div className="user__info">
                <div className="user__info__fullName">{user.username}</div>
                <div className="user__info__picture"><img src={user.profilePicture} alt={user.username}/></div>
                <div className="user__info__date">{format(review.createdAt)}</div>
            </div>

        </div>
    );
};

export default SingleReview;