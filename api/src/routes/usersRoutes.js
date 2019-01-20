const {Router} = require("express")

const {addUser, getUserById, getUsersList, updateUser, deleteUser} = require('../controllers/userController')

const app = module.exports = Router()

//Décalaration de routes pour /Users
app.route('/')
	.get(getUsersList)
	.post(addUser);

app.route('/:id')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser);
