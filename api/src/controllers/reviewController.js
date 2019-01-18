const ReviewRepository = require('../repositories/reviewRepository')

const Joi = require('joi')

let reviews = ReviewRepository




// pour recuperer la liste complete des reviews
exports.getReviewsList = (req, res) => {
	res.send(reviews.getReviews())
	res.end()
}

// pour recuperer une review specifique par son identifiant
exports.getReviewById = (req, res) => {
	const review = reviews.getReviewById(req.params.id)
	if (review) {
		res.send(review)
	} else {
		res.status(404).send('review not found')
	}
	res.end()
}

// pour ajouter une nouvelle review
exports.addReview = (req, res) => {
	res.send(reviews.addReview(req.body))
}

// pour modifier les informations d'une review
exports.updateReview = (req, res) => {
	const review = reviews.getReviewById(req.params.id)
	if (review) {
		res.status(200).send(reviews.updateReview(req.params.id, req.body))
	} else {
		res.status(404).send('review not found')
	}
}

// pour supprimer une review
exports.deleteReview = (req, res) => {
	const review = reviews.getReviewById(req.params.id)
	if (review) {
		reviews.deleteReview(req.params.id)
		res.status(204).send('review deleted')
	} else {
		res.status(404).send('review not found')
	}
	res.end()
}