const {Router} = require("express")

const {addUser, getUserById, getUsersList, updateUser, deleteUser, connect, disconnect} = require('../controllers/userController')

const app = module.exports = Router()


//Décalaration de routes pour /Users
app.route('/')
	.get(getUsersList)
	.post(addUser)

app.route('/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser)

app.route('/connect/:id')
	.get(connect)

app.route('/disconnect')
	.post(disconnect)