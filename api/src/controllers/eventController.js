const EventRepository = require('../repositories/eventRepository')
const UserRepository = require('../repositories/userRepository')

const userController = require('./userController')
let events = EventRepository
let users = UserRepository


//pour verifier qu'un objet existe
function isset(object){
	try {
		if (object){
			return true;
		}
		else if (object.hasOwnProperty("id")){
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}

}


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
	if (req.body.token) {
		if (isConnected(req.body.token)) {
			const event = getEventFromReq(req.body)
			if (event) {
				res.status(201).send(events.addEvent(event))
			} else {
				res.status(400).send('Bad request')
			}
		} else {
			res.status(403).send('You must be connected to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
}

// pour modifier les informations d'un evenement
exports.updateEvent = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isModifyingHisEvent(token, req.params.id) || isAdmin(token)) {
			const event = events.getEventById(req.params.id)
			if (event) {
				res.status(202).send(events.updateEvent(req.params.id, getEventFromReq(req.body)))
			} else {
				res.status(404).send('event not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour supprimer un evenement
exports.deleteEvent = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isModifyingHisEvent(token, req.params.id) || isAdmin(token)) {
			const event = events.getEventById(req.params.id)
			if (event) {
				events.deleteEvent(req.params.id)
				res.status(200).send('event deleted')
			} else {
				res.status(404).send('event not found')
			}
		} else {
				res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour inscrire un utilisateur a un evenement
exports.addUser = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isset(req.params.id) && isset(req.body.userId)) {
			if (isModifyingHisEvent(token, req.params.id) || isAdmin(token) || isModifyingHimself(token, req.body.userId)) {
				const event = events.getEventById(req.params.id)
				const user = users.getUserById(req.body.userId)
				if (isset(event)){
					if (isset(user)){
						res.status(202).send(events.addUser(req.params.id, req.body.userId))
					} else {
						res.status(404).send('user not found')
					}
				} else {
					res.status(404).send('event not found')
				}
			} else {
				res.status(403).send('You are not authorised to perform this action')
			}
		} else {
			res.status(400).send('Bad request')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour desinscrire un utilisateur d'un evenement
exports.deleteUser = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isset(req.params.id) && isset(req.body.userId)) {
			if (isModifyingHisEvent(token, req.params.id) || isAdmin(token) || isModifyingHimself(token, req.body.userId)) {
				const event = events.getEventById(req.params.id)
				const user = users.getUserById(req.body.userId)
				if (isset(event)) {
					if (isset(user)) {
						res.status(202).send(events.deleteUser(req.params.id, req.body.userId))
					} else {
						res.status(404).send('user not found')
					}
				} else {
					res.status(404).send('event not found')
				}
			} else {
				res.status(403).send('You are not authorised to perform this action')
			}
		} else {
			res.status(400).send('Bad request')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour recupérer du contenu d'un requete uniquement les données concernant l'evennement (et non la session)
function getEventFromReq(body) {
	let event = {}
	Object.keys(body).forEach(function (key) {
		if (key !== "token") {
			event[key] = body[key]
		}
	})
	return event
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

// pour verifier qu'un utilisateur modifie un evennement dont il est le créateur
function isModifyingHisEvent(token, eventId){
	const i = userController.getConnected.findIndex(el => el.sessionId === token)
	const eventCreatorId = events.getEventById(eventId).creator
	return (eventCreatorId === userController.getConnected[i].userId)
}

// pour verifier qu'un utilisateur s'inscrit ou se desinscrit lui-même
function isModifyingHimself(token, userId){
	const i = userController.getConnected.findIndex(el => el.sessionId === token)
	const tokenUserId = users.getUserById(userController.getConnected[i].userId).id
	if (isConnected(token)){
		if (userId === tokenUserId){
			return true
		}
	}
	return false
}