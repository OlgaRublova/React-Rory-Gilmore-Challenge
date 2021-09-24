const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {type: Number, required: [true, 'Please tell us the id!'], unique:true},
    title: {type: String, required: [true, 'Please tell us the title!']},
    firstName: {type: String, required: [true, 'Please tell us the firstName!']},
    lastName: {type: String, required: [true, 'Please tell us the lastName!']},
    genre: {type: String, required: [true, 'Please tell us the genre!']},
    page: {type: Number, required: [true, 'Please tell us the number of pages!']},
    cover:  {
        data: Buffer,
        contentType: String
    },
},
    {collection: "books"}
)


//      export to be use
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
