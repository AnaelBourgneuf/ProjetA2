const IdeaRepository = require('../repositories/ideaRepository')

const Joi = require('joi')

let ideas = IdeaRepository





exports.getIdeasList = (req, res) => {
	res.send(ideas.getIdeas())
	res.end()
}

exports.getIdeaById = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		res.send(idea)
	} else {
		res.status(404).send('idea not found')
	}
	res.end()
}

exports.addIdea = (req, res) => {
	//emailShouldBeAvailable(req.body.email)
	res.send(ideas.addIdea(req.body))
}

exports.updateIdea = (req, res) => {
	const idea = ideas.getIdeaById(req.params.id)
	if (idea) {
		//emailShouldBeAvailable(req, res)
		res.status(200).send(ideas.updateIdea(req.params.id, req.body))
	} else {
		res.status(404).send('idea not found')
	}
}

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