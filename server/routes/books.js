const router = require("express").Router();
const Book = require("../models/Book");


//  get
router.get("/:id", async (req, res) => {
    console.log( req.params.id)

        try {

            const book = await Book.find({
                id: req.params.id
                // firstName: "Anne"
            }).exec();


            res.status(200).json(book)

        } catch (err) {
            res.status(500).json(err)
        }
    }

)



module.exports = router;