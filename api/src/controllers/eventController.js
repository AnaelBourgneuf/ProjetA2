const EventRepository = require('../repositories/eventRepository')

const Joi = require('joi')

let events = EventRepository




// pour recuperer la liste complete des evenements
exports.getEventsList = (req, res) => {
	res.send(events.getEvents())
	res.end()
}

// pour recuperer un evenement specifique par son identifiant
exports.getEventById = (req, res) => {
	const event = events.getUserById(req.params.id)
	if (event) {
		res.send(event)
	} else {
		res.status(404).send('event not found')
	}
	res.end()
}

// pour ajouter un nouvel evenement
exports.addEvent = (req, res) => {
	res.send(events.addEvent(req.body))
}

// pour modifier les informations d'un evenement
exports.updateEvent = (req, res) => {
	const event = events.getEventById(req.params.id)
	if (event) {
		res.status(200).send(events.updateEvent(req.params.id, req.body))
	} else {
		res.status(404).send('event not found')
	}
}

// pour supprimer un evenement
exports.deleteEvent = (req, res) => {
	const event = events.getEventById(req.params.id)
	if (event) {
		events.deleteEvent(req.params.id)
		res.status(204).send('event deleted')
	} else {
		res.status(404).send('event not found')
	}
	res.end()
}