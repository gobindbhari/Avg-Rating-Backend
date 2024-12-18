const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postName:String,
    description:String,
    avgRating:{
        type:Number,
        default:0        
    },
    totalRating:[{
        type:String        
    }],
    rating:{
        type:Number,
        default: 0
    }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post