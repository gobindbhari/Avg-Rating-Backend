const express = require('express')
const { createPost } = require('../controllers/postControllers')

const postRouter = express.Router()

postRouter.route('/').post(createPost)

module.exports = postRouter