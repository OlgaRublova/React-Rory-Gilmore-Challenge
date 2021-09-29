const router = require("express").Router();
const Book = require("../models/Book");


//  get
router.get("/:id", async (req, res) => {

        try {

            const book = await Book.find({
                id: req.params.id
            }).exec();


            res.status(200).json(book)

        } catch (err) {
            res.status(500).json(err)
        }
    }

)



module.exports = router;