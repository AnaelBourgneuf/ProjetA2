const {Router} = require("express")
const app = module.exports = Router()

const {addEvent, getEventById, getEventsList, updateEvent, deleteEvent, addUser} = require('../controllers/eventController')

// Déclaration de sroutes pour /Events
app.route('/')
	.get(getEventsList)
	.post(addEvent)

app.route('/:id')
	.get(getEventById)
	.put(updateEvent)
	.delete(deleteEvent);

app.route('/add/:id')
	.put(addUser)