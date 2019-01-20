const {Router} = require("express")
const app = module.exports = Router()

const {addReview, getReviewById, getReviewsList, updateReview, deleteReview} = require('../controllers/reviewController')

// Déclaration de routes pour /Reviews
app.route('/')
	.get(getReviewsList)
	.post(addReview);

app.route('/:id')
	.get(getReviewById)
	.put(updateReview)
	.delete(deleteReview);