const Post = require("../models/postModel")


const createPost = async (req,res) => {
    try {
        const {postName, description , avgRating , totalRating} = req.body
        const data = await Post.create({
            postName, description 
        })
        return res.status(201).json({
            message: 'Post created successfully',
            post: data
        });
        
    } catch (error) {
        console.log('error in createPOst controllers', error)
    }    
}


module.exports = {createPost}