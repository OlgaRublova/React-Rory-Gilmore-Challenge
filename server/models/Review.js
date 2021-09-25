const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: [true, 'Please provide a userId'],
        },
        desc: {
            type: String,
            required: [true, 'Please write your feedback'],
            max: 500
        },
        img: {
            data: Buffer,
            contentType: String,
        },
        likes: {
            type: Array,
            default: []
        },

    },
    {timestamps: true},
    {collection: "reviews"}
)

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;