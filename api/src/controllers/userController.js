const uuid = require('uuid')
const UserRepository = require('../repositories/userRepository')


let users = UserRepository

let connected = [{ userId: '3651ac54-d393-495b-b2ae-a26616de3fc4',
	sessionId: 'cede2d61-84d4-48ea-a6b6-bf9d1cfb354f',
	lastOP: new Date() }]

// pour qu'un autre élément de l'api puisse savoir qui est connecté
exports.getConnected = connected


// pour recuperer la liste complete des utilisateurs
exports.getUsersList = (req, res) => {
	res.status(200).send(users.getUsers())
	res.end()
}

// pour recuperer un utilisateur specifique par son identifiant
exports.getUserById = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		res.status(200).send(user)
	} else {
		res.status(404).send('user not found')
	}
	res.end()
}

// pour ajouter un nouvel utilisateur
exports.addUser = (req, res) => {
	if (userEmailIsAvailable(getUserFromReq(req.body))) {
		res.status(201).send(users.addUser(getUserFromReq(req.body)))
	} else {
		res.status(400).send("Email is already used")
	}
	res.end()
}

// pour modifier les informations d'un utilisateur
exports.updateUser = (req, res) => {
	if (req.body.token){
		if (isAdmin(req.body.token) || isModifyingHimself(req.body.token, req.params.id)) {
			const user = users.getUserById(req.params.id)
			if (user) {
				userEmailIsAvailable(getUserFromReq(req.body))
				res.status(202).send(users.updateUser(req.params.id, getUserFromReq(req.body)))
			} else {
				res.status(404).send('user not found')
			}
			res.end()
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour supprimer un utilisateur
exports.deleteUser = (req, res) => {
	if (req.body.token){
		const himself = isModifyingHimself(req.body.token, req.params.id)
		if (isAdmin(req.body.token) || himself) {
			const user = users.getUserById(req.params.id)
			if (user) {
				users.deleteUser(req.params.id)
				res.status(200).send('user deleted')
			} else {
				res.status(404).send('user not found')
			}
			res.end()
		} else {
			res.status(403).send('You are not authorised to perform this action')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour qu'un utilisateur se déconnecte
exports.disconnect = (req, res) => {
	if (req.body.token){
		const token = req.body.token
		const i = connected.findIndex(el => el.sessionId === token)
		if (i !== -1){
			connected.splice(i, 1)
			res.status(200).send('user disconnected')
		} else {
			res.status(400).send('User was not connected')
		}
	} else {
		res.status(400).send('Please specify session token')
	}
	res.end()
}

// pour qu'un utilisateur se connecte
exports.connect = (req, res) => {
	const user = users.getUserById(req.params.id)
	if (user) {
		const id = req.params.id
		const i = connected.findIndex(el => el.userId === id)
		if (i !== -1){
			const token = connected[i].sessionId
			connected[i].lastOP = new Date()
			res.status(202).send(token)
		} else {
			const token = uuid()
			connected.push({userId : req.params.id, sessionId : token, lastOP : new Date()})
			res.status(202).send(token)
		}
	} else {
		res.status(404).send('user not found')
	}
	res.end()
}

// pour recupérer du contenu d'un requete uniquement les données concernant l'utilisateur (et non la session)
function getUserFromReq(body){
	let user = {}
	Object.keys(body).forEach(function(key) {
		if (key !== "token"){
			user[key] = body[key]
		}
	})
	//console.log(user)
	return user
}

// pour verifier qu'on ai pas deux fois le meme email en base
function emailIsAvailable(email){
	const existingUsers = users.getUsers()
	//console.log(existingUsers)
	const i = existingUsers.findIndex(el => el.email === email)
	return (i === -1)
}

// premier traitement pour la fonction "emailIsAvailable"
function userEmailIsAvailable(user){
	if (user.hasOwnProperty("email")) {
		return emailIsAvailable(user.email)
	}
	return true
}

// pour verifier qu'un utilisateur ne modifie pas les informations d'un autre que lui-meme
function isModifyingHimself(token, userId){
	const i = connected.findIndex(el => el.sessionId === token)
	const tokenUserId = users.getUserById(connected[i].userId).id
	if (isConnected(token)){
		if (userId === tokenUserId){
			return true
		}
	}
	return false
}

// pour verifier qu'un utilisateur est connecté
function isConnected(token){
	const i = connected.findIndex(el => el.sessionId === token)
	return (i !== -1)
}

// pour verifier qu'un utilisateur est administrateur
function isAdmin(token) {
	const i = connected.findIndex(el => el.sessionId === token)
	const user = users.getUserById(connected[i].userId)
	if (user){
		return user.isAdmin
	}
	return false
}