const ReviewRepository = require('../repositories/reviewRepository')
const UserRepository = require('../repositories/userRepository')
const PromoRepository = require('../repositories/promoRepository')

const userController = require('./userController')
let reviews = ReviewRepository
let users = UserRepository
let promos = PromoRepository




// pour recuperer la liste complete des reviews
exports.getReviewsList = (req, res) => {
	res.status(200).send(reviews.getReviews())
	res.end()
}

// pour recuperer une review specifique par son identifiant
exports.getReviewById = (req, res) => {
	const review = reviews.getReviewById(req.params.id)
	if (review) {
		res.status(200).send(review)
	} else {
		res.status(404).send('review not found')
	}
	res.end()
}

// pour récuperer les reviews pour une promo
exports.getReviewByToken = (req, res) => {
	if (req.body.token) {
		const i = userController.getConnected.findIndex(el => el.sessionId === req.body.token)
		if (i !== -1) {
			const user = users.getUserById(userController.getConnected[i].userId)
			if (user) {
				res.status(200).send(reviews.getReviewsByPromo(user.promo))
			} else {
				res.status(404).send('user not found')
			}
		} else {
			res.status(403).send("You have to be connected to perform this action")
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour ajouter une nouvelle review
exports.addReview = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const review = getReviewFromReq(req.body)
			if (review){
				res.status(201).send(reviews.addReview(review))
			} else {
				res.status(403).send('Bad request')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
}

// pour modifier les informations d'une review
exports.updateReview = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const review = getReviewFromReq(req.body)
			if (review){
				const review = reviews.getReviewById(req.params.id)
				if (review) {
					res.status(202).send(reviews.updateReview(req.params.id, getReviewFromReq(req.body)))
				} else {
					res.status(404).send('review not found')
				}
			} else {
				res.status(403).send('Bad request')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
}

// pour supprimer une review
exports.deleteReview = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const review = reviews.getReviewById(req.params.id)
			if (review) {
				reviews.deleteReview(req.params.id)
				res.status(200).send('review deleted')
			} else {
				res.status(404).send('review not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour recupérer du contenu d'un requete uniquement les données concernant l'idee (et non la session)
function getReviewFromReq(body) {
	let review = {}
	Object.keys(body).forEach(function (key) {
		if (key !== "token") {
			review[key] = body[key]
		}
	})
	return review
}

// pour verifier qu'un utilisateur est administrateur
function isAdmin(token) {
	const i = userController.getConnected.findIndex(el => el.sessionId === token)
	if (i !== -1) {
		const user = users.getUserById(userController.getConnected[i].userId)
		if (user) {
			return user.isAdmin
		}
	}
	return false
}
