const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
        bookId: {
            type: String,
            required: [true, 'Please provide a userId'],
        },

        userId: {
            type: String,
            required: [true, 'Please provide a userId'],
        },
        headline: {
            type: String,
            required: [true, 'Please write your title'],
            max: 200
        },
        detail: {
            type: String,
            required: [true, 'Please write your detail'],
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
        ratingsQuantity: {
            type: Number,
            default: 5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
            set: val => Math.round(val * 10) / 10
        },
    },
    {timestamps: true},
    {collection: "reviews"}
)

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;