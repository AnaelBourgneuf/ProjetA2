const EventRepository = require('../repositories/eventRepository')
const UserRepository = require('../repositories/userRepository')

const Joi = require('joi')

let events = EventRepository
let users = UserRepository




// pour recuperer la liste complete des evenements
exports.getEventsList = (req, res) => {
	res.status(200).send(events.getEvents())
	res.end()
}

// pour recuperer un evenement specifique par son identifiant
exports.getEventById = (req, res) => {
	const event = events.getEventById(req.params.id)
	if (event) {
		res.status(200).send(event)
	} else {
		res.status(404).send('event not found')
	}
	res.end()
}

// pour ajouter un nouvel evenement
exports.addEvent = (req, res) => {
	res.status(201).send(events.addEvent(req.body))
}

// pour modifier les informations d'un evenement
exports.updateEvent = (req, res) => {
	const event = events.getEventById(req.params.id)
	if (event) {
		res.status(202).send(events.updateEvent(req.params.id, req.body))
	} else {
		res.status(404).send('event not found')
	}
}

// pour supprimer un evenement
exports.deleteEvent = (req, res) => {
	const event = events.getEventById(req.params.id)
	if (event) {
		events.deleteEvent(req.params.id)
		res.status(200).send('event deleted')
	} else {
		res.status(404).send('event not found')
	}
	res.end()
}

// pour inscrire un utilisateur a un evenement
exports.addUser = (req, res) => {
	const event = events.getEventById(req.params.id)
	const user = users.getUserById(req.body.userId)
	if (event){
		if (user){
			res.status(202).send(events.addUser(req.params.id, req.body.userId))
		} else {
			res.status(404).send('user not found')
		}
	} else {
		res.status(404).send('event not found')
	}
}

// pour desinscrire un utilisateur d'un evenement
exports.deleteUser = (req, res) => {
	const event = events.getEventById(req.params.id)
	const user = users.getUserById(req.body.userId)
	if (event){
		if (user){
			res.status(202).send(events.deleteUser(req.params.id, req.body.userId))
		} else {
			res.status(404).send('user not found')
		}
	} else {
		res.status(404).send('event not found')
	}
}