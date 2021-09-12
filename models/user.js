const mongoose = require("mongoose");
const BookShelf = require("./bookshelf");
const db       = require("../mongodb");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bookshelves: [BookShelf.bookShelfSchema]
});


const User = mongoose.model('User',userSchema);

module.exports = User;