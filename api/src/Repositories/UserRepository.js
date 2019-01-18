const uuid = require('uuid')

class UserRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', firstName: 'Alice', name: 'Duvent', gender: 'female', birthD: new Date().setFullYear(1995, 11, 3), alias: "Lice", promo: 1, email: "alice.apdm@gmail.com", isAdmin: false},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', firstName: 'Bob', name: 'Leponge', gender: 'male', birthD: new Date().setFullYear(1990, 3, 1), alias: null, promo: 1, email: "bob.leponge@gmail.com", isAdmin: false},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', firstName: 'Charlie', name: 'Ouest', gender: 'male', birthD: new Date().setFullYear(2001, 9, 30), alias: "Charlot", promo: 1, email: "charlie.ouest@gmail.com", isAdmin: false},
		]
	}

	getUsers () {
		return this.items;
	}

	getUserById (id) {
		console.log(id)
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			return this.items.find(el => el.id === id)
		} else {
			return null
		}
	}

	addUser(user){
		const record = {
			id: uuid(),
			... user
		}
		this.items.push(record)
		return record
	}

	updateUser(id, user){
		const { name, gender, age, email } = user
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			if (name) {
				this.items[i].name = name
			}
			if (gender) {
				this.items[i].gender = gender
			}
			if (age) {
				this.items[i].age = age
			}
			if (email) {
				this.items[i].email = email
			}
		}
		return this.getUserById(id)
	}

	deleteUser(id){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1){
			this.items.splice(i, 1)
		}
	}

	isAvailableEmail(email) {
		return (this.items.findIndex(el => el.email === email) === -1)
	}
}

module.exports = new UserRepository();