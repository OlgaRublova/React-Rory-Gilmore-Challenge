const router = require("express").Router();
const Book = require("../models/Book");
const Review = require("../models/Review");
const User = require("../models/User");


//get all books
router.get("/", async (req, res) => {
        try {
            let books = await Book.find();
            res.status(200).json(books);

        } catch (err) {
            res.status(500).json(err);
        }
    }
)

//  get
router.get("/:id", async (req, res) => {

        try {

            const book = await Book.find({
                _id: req.params.id
            }).exec();
            res.status(200).json(book)

        } catch (err) {
            res.status(500).json(err)
        }
    }
)

// fetch a specific book
router.get("/find/:id", async (req, res) => {

        try {
            const book = await Book.find({
                _id: req.params.id
            }).exec();
            res.status(200).json(book)

        } catch (err) {
            res.status(500).json(err)
        }
    })


//  push the book into the checked list
// router.put("/:id/checked", async (req, res) => {
//     try {
//         const book = await Book.find({
//             _id: req.params.id
//         }).exec();
//
//         if (!user.booksChecked.includes(req.body.bookId)) {
//             await user.updateOne({$push: {booksChecked: req.body.bookId}})
//             res.status(200).json("The book has been checked")
//         } else {
//             await user.updateOne({$pull: {booksChecked: req.body.userId}})
//             res.status(200).json("The book has been unchecked")
//         }
//
//     } catch (err) {
//         res.status(500).json(err)
//         console.log(err)
//     }
// })


module.exports = router;