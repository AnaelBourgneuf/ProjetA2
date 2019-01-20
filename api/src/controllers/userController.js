const UserRepository = require('../repositories/userRepository')

const Joi = require('joi')

let users = UserRepository




// pour recuperer la liste complete des utilisateurs
exports.getUsersList = (req, res) => {
	res.send(users.getUsers())
	res.end()
}

// pour recuperer un utilisateur specifique par son identifiant
exports.getUserById = (req, res) => {
	console.log(req.params)
	const user = users.getUserById(req.params.id)
	if (user) {
		res.send(user)
	} else {
		res.status(404).send('user not found')
	}
	res.end()
}

// pour ajouter un nouvel utilisateur
exports.addUser = (req, res) => {
	//emailShouldBeAvailable(req.body.email)
	res.send(users.addUser(req.body))
}

// pour modifier les informations d'un utilisateur
exports.updateUser = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		//emailShouldBeAvailable(req, res)
		res.status(200).send(users.updateUser(req.params.id, req.body))
	} else {
		res.status(404).send('user not found')
	}
}

// pour supprimer un utilisateur
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