
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userName:String,
    postName:String,
    rating:Number
})

const Review = mongoose.model('Review', ReviewSchema)

module.exports = Review