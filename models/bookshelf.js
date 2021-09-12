const mongoose = require("mongoose");
const Volume = require("./volume");

const bookShelfSchema = new mongoose.Schema({
    name: String,
    volumes: [Volume.volumeSchema],
    isPrivate: {type : Boolean, default : false},
    useremail : String
});

const BookShelfModel = mongoose.model('BookShelfCollection',bookShelfSchema);

module.exports = {
    bookShelfSchema,
    BookShelfModel
};