const uuid = require('uuid')
const UserRepository = require('../repositories/userRepository')


let users = UserRepository

let connected = []

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