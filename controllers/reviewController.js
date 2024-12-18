const Post = require("../models/postModel");
const Review = require("../models/reviewModel");


const createReview = async (req, res) => {
    try {
        const { id } = req.params
        const { userName, postName, rating } = req.body
        const data = await Review.create({
            userName, postName, rating
        })
        const checkpost = await Post.findById(id)
        console.log(checkpost)


        
        checkpost.totalRating.push(userName)
        checkpost.rating = checkpost.rating + rating
        await checkpost.save()
        console.log(checkpost,'....................')

        checkpost.avgRating = (Math.round(checkpost.rating / checkpost.totalRating.length)) || 0;
        console.log('????????????????????????????????????????')
        await checkpost.save()
        

        return res.status(201).json({
            message: 'Review is created successfully',
            post: data
        });

    } catch (error) {
        console.log('error in createReview controllers', error)
    }
}





module.exports = { createReview }