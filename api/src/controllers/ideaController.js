const IdeaRepository = require('../repositories/ideaRepository')

const Joi = require('joi')

let ideas = IdeaRepository




// pour recupererr la liste complete des idees
exports.getIdeasList = (req, res) => {
	res.send(ideas.getIdeas())
	res.end()
}

// pour recuperer une idee specifique par son identifiant
exports.getIdeaById = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		res.send(idea)
	} else {
		res.status(404).send('idea not found')
	}
	res.end()
}

// pour ajouter une nouvelle idee
exports.addIdea = (req, res) => {
	res.send(ideas.addIdea(req.body))
}

// pour modifier les informations d'une idee
exports.updateIdea = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		res.status(200).send(ideas.updateIdea(req.params.id, req.body))
	} else {
		res.status(404).send('idea not found')
	}
}

// pour supprimer une idee
exports.deleteIdea = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		ideas.deleteIdea(req.params.id)
		res.status(204).send('idea deleted')
	} else {
		res.status(404).send('idea not found')
	}
	res.end()
}