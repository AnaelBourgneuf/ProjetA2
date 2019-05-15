const {Router} = require("express")
const {addIdea, getIdeaById, getIdeasList, updateIdea, deleteIdea, addUser, subUser} = require('../controllers/ideaController')

const app = module.exports = Router()

//Décalaration de routes pour /Users
app.route('/')
	.get(getIdeasList)
	.post(addIdea)

app.route('/:id')
	.get(getIdeaById)
	.put(updateIdea)
	.delete(deleteIdea)

app.route('/users/:id')
	.put(addUser)
	.delete(subUser)