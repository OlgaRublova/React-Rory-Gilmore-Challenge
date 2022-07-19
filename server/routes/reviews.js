const router = require("express").Router();
const Review = require("../models/Review");


//  create a review
router.post("/:id", async (req, res) => {
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

        const reviews = await Review
            .find(filter)


//  get all review stats - average rating and count
        const reviewsStats = await
            Review.aggregate([
                {
                    $match: {"bookId": {$eq: req.params.id}}
                },
                {
                    $group: {
                        _id: req.params.id,
                        avgRating: {$avg: "$ratingsQuantity"},
                        numRatings: {$sum: 1},
                    }
                }
            ]).exec()

        // res.status(200).json(reviewsStats.reverse())
        res.status(200).json({"reviews": reviews, "reviewsStats": reviewsStats.reverse()})
    } catch (err) {
        res.status(500).json(err)
    }
})


// fetch a specific review
router.get("/find/:id", async (req, res) => {
        console.log(req)

        try {
            const review = await Review.find({
                _id: req.params.id
            }).exec();
            res.status(200).json(review)

        } catch (err) {
            res.status(500).json(err)
        }
    }
)

module.exports = router;