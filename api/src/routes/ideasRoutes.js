const {Router} = require("express")
const controller = require('../controllers/IdeaController')

const {addIdea, getIdeaById, getIdeasList, updateIdea, deleteIdea} = require('../controllers/IdeaController')

const app = module.exports = Router()

//Décalaration de routes pour /Users
app.route('/')
	.get(getIdeasList)
	.post(addIdea);

app.route('/:userID')
	.get(getIdeaById)
	.put(updateIdea)
	.delete(deleteIdea);
