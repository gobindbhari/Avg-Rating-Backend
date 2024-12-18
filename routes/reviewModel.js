const express = require('express')
const { createReview } = require('../controllers/reviewController')

const reviewRouter = express.Router()

reviewRouter.route('/:id').post(createReview)

module.exports = reviewRouter