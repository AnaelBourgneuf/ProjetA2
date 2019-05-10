const {Router} = require("express")
const app = module.exports = Router()

const {addEvent, getEventById, getEventsList, updateEvent, deleteEvent, addUser, deleteUser} = require('../controllers/eventController')

// Déclaration de sroutes pour /Events
app.route('')
	.get(getEventsList)
	.post(addEvent)

app.route('id=:id')
	.get(getEventById)
	.put(updateEvent)
	.delete(deleteEvent);

app.route('/users?id=:id')
	.put(addUser)
	.delete(deleteUser)