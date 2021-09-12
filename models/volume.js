const mongoose = require("mongoose");
const db       = require("../mongodb");

const volumeSchema = new mongoose.Schema({
    title: String,
    publishdate: Date,
    reviews : [{stars: Number, text: String, email:String }],
    
});

const volumeModel = mongoose.model('VolumeCollection',volumeSchema);

module.exports = {
    volumeSchema,
    volumeModel
}