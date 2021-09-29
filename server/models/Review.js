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
        title: {
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

    },
    {timestamps: true},
    {collection: "reviews"}
)

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;