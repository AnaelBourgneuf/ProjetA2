const UserRepository = require('../Repositories/UserRepository')

const Joi = require('joi')

let users = UserRepository





exports.getUsersList = (req, res) => {
	res.send(users.getUsers())
	res.end()
}

exports.getUserById = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		res.send(user)
	} else {
		res.status(404).send('user not found')
	}
	res.end()
}

exports.addUser = (req, res) => {
	//emailShouldBeAvailable(req.body.email)
	res.send(users.addUser(req.body))
}

exports.updateUser = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		//emailShouldBeAvailable(req, res)
		res.status(200).send(users.updateUser(req.params.id, req.body))
	} else {
		res.status(404).send('user not found')
	}
}

exports.deleteUser = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		users.deleteUser(req.params.id)
		res.status(204).send('user deleted')
	} else {
		res.status(404).send('user not found')
	}
	res.end()
}