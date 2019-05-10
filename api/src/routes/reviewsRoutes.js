const {Router} = require("express")
const app = module.exports = Router()

const {addReview, getReviewById, getReviewsList, updateReview, deleteReview, getReviewByToken} = require('../controllers/reviewController')

// Déclaration de routes pour /Reviews
app.route('')
	.get(getReviewById)
	.post(addReview)

// les routes comprenant un étage supplémentaire doivent etre déclarées avant celles comprenant une variable
// sinon dans le cas présent "user" sera condidéré comme l'id
app.route('/user')
	.get(getReviewByToken)

app.route('/:id')
	.get(getReviewById)
	.put(updateReview)
	.delete(deleteReview)

