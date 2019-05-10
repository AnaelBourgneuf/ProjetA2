const IdeaRepository = require('../repositories/ideaRepository')
const UserRepository = require('../repositories/userRepository')

const userController = require('./userController')
let ideas = IdeaRepository
let users = UserRepository

//pour verifier qu'un objet existe
function isset(object){
	try {
		return (object != null || object.hasOwnProperty("id"))
	} catch (e) {
		return false
	}
}

// pour recupererr la liste complete des idees
exports.getIdeasList = (req, res) => {
	res.status(200).send(ideas.getIdeas())
	res.end()
}

// pour recuperer une idee specifique par son identifiant
exports.getIdeaById = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		res.status(200).send(idea)
	} else {
		res.status(404).send('idea not found')
	}
	res.end()
}

// pour ajouter une nouvelle idee
exports.addIdea = (req, res) => {
	if (req.body.token) {
		if (isConnected(req.body.token)) {
			const idea = getIdeaFromReq(req.body)
			if (idea) {
				res.status(201).send(ideas.addIdea(idea))
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

// pour modifier les informations d'une idee
exports.updateIdea = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isModifyingHisIdea(token, req.params.id) || isAdmin(token)) {
			const idea = ideas.getIdeaById(req.params.id)
			if (idea) {
				res.status(202).send(ideas.updateIdea(req.params.id, getIdeaFromReq(req.body)))
			} else {
				res.status(404).send('idea not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour supprimer une idee
exports.deleteIdea = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isModifyingHisIdea(token, req.params.id) || isAdmin(token)) {
			const idea = ideas.getIdeaById(req.params.id)
			if (idea) {
				ideas.deleteIdea(req.params.id)
				res.status(200).send('idea deleted')
			} else {
				res.status(404).send('idea not found')
			}
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour inscrire un utilisateur a une idee
exports.addUser = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isset(req.params.id) && isset(req.body.userId)) {
			if (isModifyingHisIdea(token, req.params.id) || isAdmin(token) || isModifyingHimself(token, req.body.userId)) {
				const idea = ideas.getIdeaById(req.params.id)
				const user = users.getUserById(req.body.userId)
				if (isset(idea)){
					//console.log("user : "+user)
					if (isset(user)){
						res.status(202).send(ideas.addUser(req.params.id, req.body.userId))
					} else {
						res.status(404).send('user not found')
					}
				} else {
					res.status(404).send('idea not found')
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

// pour desinscrire un utilisateur d'une idee
exports.subUser = (req, res) => {
	const token = req.body.token
	if (token) {
		if (isset(req.params.id) && isset(req.body.userId)) {
			if (isModifyingHisIdea(token, req.params.id) || isAdmin(token) || isModifyingHimself(token, req.body.userId)) {
				const idea = ideas.getIdeaById(req.params.id)
				const user = users.getUserById(req.body.userId)
				if (isset(idea)){
					if (isset(user)){
						res.status(202).send(ideas.subUser(req.params.id, req.body.userId))
					} else {
						res.status(404).send('user not found')
					}
				} else {
					res.status(404).send('idea not found')
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

// pour recupérer du contenu d'un requete uniquement les données concernant l'idee (et non la session)
function getIdeaFromReq(body) {
	let idea = {}
	Object.keys(body).forEach(function (key) {
		if (key !== "token") {
			idea[key] = body[key]
		}
	})
	return idea
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
function isModifyingHisIdea(token, ideaId){
	const i = userController.getConnected.findIndex(el => el.sessionId === token)
	const eventCreatorId = ideas.getIdeaById(ideaId).creator
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