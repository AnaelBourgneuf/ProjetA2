const {Router} = require("express")
const controller = require('../controllers/UserController')

const {addUser, getUserById, getUsersList, updateUser, deleteUser} = require('../controllers/UserController')

const app = module.exports = Router()

//Décalaration de routes pour /Users
app.route('/')
	.get(getUsersList)
	.post(addUser);

app.route('/:userID')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser);
