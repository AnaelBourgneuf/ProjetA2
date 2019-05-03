const IdeaRepository = require('../repositories/ideaRepository')
const UserRepository = require('../repositories/userRepository')

const Joi = require('joi')

let ideas = IdeaRepository
let users = UserRepository




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
	res.status(201).send(ideas.addIdea(req.body))
}

// pour modifier les informations d'une idee
exports.updateIdea = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		res.status(202).send(ideas.updateIdea(req.params.id, req.body))
	} else {
		res.status(404).send('idea not found')
	}
}

// pour supprimer une idee
exports.deleteIdea = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		ideas.deleteIdea(req.params.id)
		res.status(200).send('idea deleted')
	} else {
		res.status(404).send('idea not found')
	}
	res.end()
}

// pour inscrire un utilisateur a une idee
exports.addUser = (req, res) => {
	const event = ideas.getIdeaById(req.params.id)
	const user = users.getUserById(req.body.userId)
	if (event){
		if (user){
			res.status(202).send(ideas.addUser(req.params.id, req.body.userId))
		} else {
			res.status(404).send('user not found')
		}
	} else {
		res.status(404).send('event not found')
	}
}

// pour desinscrire un utilisateur d'une idee
exports.subUser = (req, res) => {
	const event = ideas.getIdeaById(req.params.id)
	const user = users.getUserById(req.body.userId)
	if (event){
		if (user){
			res.status(202).send(ideas.subUser(req.params.id, req.body.userId))
		} else {
			res.status(404).send('user not found')
		}
	} else {
		res.status(404).send('event not found')
	}
}