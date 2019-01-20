const {Router} = require("express")
const controller = require('../controllers/ideaController')

const {addIdea, getIdeaById, getIdeasList, updateIdea, deleteIdea} = require('../controllers/ideaController')

const app = module.exports = Router()

//Décalaration de routes pour /Users
app.route('/')
	.get(getIdeasList)
	.post(addIdea)

app.route('/:id')
	.get(getIdeaById)
	.put(updateIdea)
	.delete(deleteIdea)
