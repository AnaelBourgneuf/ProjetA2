const PromoRepository = require('../repositories/promoRepository')
const UserRepository = require('../repositories/userRepository')

const userController = require('./userController')
let promos = PromoRepository
let users = UserRepository


exports.getPromosList = (req, res) => {
	res.status(200).send(promos.getPromos())
	res.end()
}

exports.getPromoById = (req, res) => {
	const promo = promos.getPromoById(req.params.id)
	if (promo) {
		res.status(200).send(promo)
	} else {
		res.status(404).send('promo not found')
	}
	res.end()
}

exports.addPromo = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const promo = getPromoFromReq(req.body)
			if (promo) {
				res.status(201).send(promos.addPromo(promo))
			} else {
				res.status(400).send('Bad request')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
}

exports.updatePromo = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const promo = promos.getPromoById(req.params.id)
			if (promo) {
				//emailShouldBeAvailable(req, res)
				res.status(202).send(promos.updatePromo(req.params.id, getPromoFromReq(req.body)))
			} else {
				res.status(404).send('promo not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
}

exports.deletePromo = (req, res) => {
	if (req.body.token) {
		if (isAdmin(req.body.token)) {
			const promo = promos.getPromoById(req.params.id)
			if (promo) {
				promos.deletePromo(req.params.id)
				res.status(200).send('promo deleted')
			} else {
				res.status(404).send('promo not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour recupérer du contenu d'un requete uniquement les données concernant la promo (et non la session)
function getPromoFromReq(body){
	let promo = {}
	Object.keys(body).forEach(function(key) {
		if (key !== "token"){
			promo[key] = body[key]
		}
	})
	return promo
}

// pour verifier qu'un utilisateur est connecté
function isConnected(token){
	const i = userController.getConnected.findIndex(el => el.sessionId === token)
	return (i !== -1)
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