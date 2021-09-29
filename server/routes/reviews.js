const router = require("express").Router();

const Review = require("../models/Review");
const User = require("../models/User");
const Book = require("../models/Book");

//  create a review
router.post("/", async (req, res) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

//  update a review
router.put("/:id", async (req, res) => {

    try {
        const review = await Review.findById(req.params.id);

        if (review.userId === req.body.userId) {
            await review.updateOne({$set: req.body});
            res.status(200).json("your review has been updated");
        } else {
            res.status(403).json("you can only update your review");
        }
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

//  delete a review
router.delete("/:id", async (req, res) => {

    try {
        const review = await Review.findById(req.params.id);

        if (review.userId === req.body.userId) {
            await review.deleteOne();
            res.status(200).json("your review has been deleted");
        } else {
            res.status(403).json("you can only delete your review");
        }
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

//  like or dislike a review
router.put("/:id/like", async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review.likes.includes(req.body.userId)) {
            await review.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json("The review has been liked")
        } else {
            await review.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json("The review has been disliked")
        }

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})


//  get all reviews for a specific book


router.get("/:id", async (req, res, next) => {
    try {
        let filter = {};
        if (req.params.id) {
            filter = {
                bookId: req.params.id
            }
        }
        Review.find(filter).exec(function (err, reviews){
            res.status(200).json(reviews.reverse())
        })


    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;