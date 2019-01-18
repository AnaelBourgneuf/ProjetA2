const PromoRepository = require('../repositories/promoRepository')

const Joi = require('joi')

let promos = PromoRepository


exports.getPromosList = (req, res) => {
	res.send(promos.getPromos())
	res.end()
}

exports.getPromoById = (req, res) => {
	const promo = promos.getPromoById(req.params.id)
	if (promo) {
		res.send(promo)
	} else {
		res.status(404).send('promo not found')
	}
	res.end()
}

exports.addPromo = (req, res) => {
	res.send(promos.addPromo(req.body))
}

exports.updatePromo = (req, res) => {
	const promo = promos.getPromoById(req.params.id)
	if (promo) {
		//emailShouldBeAvailable(req, res)
		res.status(200).send(promo.updatePromo(req.params.id, req.body))
	} else {
		res.status(404).send('promo not found')
	}
}

exports.deletePromo = (req, res) => {
	const promo = promos.getPromoById(req.params.id)
	if (promo) {
		promos.deletePromo(req.params.id)
		res.status(204).send('promo deleted')
	} else {
		res.status(404).send('promo not found')
	}
	res.end()
}