const uuid = require('uuid')

class EventRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date().setFullYear(2019, 2, 8).setHours(10).setMinutes(30), createDateTime: new Date().setFullYear(2019, 1, 18).setHours(10).setMinutes(10), creator: 1, users: [{user: 1, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)} ,{user: 2, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)}]},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'Pizza', dateTime: new Date().setFullYear(2019, 3, 10).setHours(10).setMinutes(10), createDateTime: new Date().setFullYear(2019, 1, 18).setHours(10).setMinutes(10), creator: 1, users: [{user: 1, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)} ,{user: 2, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)}]},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', title: 'KFC du Mardi', dateTime: new Date().setFullYear(2019, 2, 5).setHours(12).setMinutes(30), createDateTime: new Date().setFullYear(2019, 1, 18).setHours(10).setMinutes(10), creator: 1, users: [{user: 1, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)} ,{user: 2, joinDateTime: new Date().setFullYear(2019, 2, 3).setHours(10).setMinutes(9)}]}
		]
	}

	getEvents () {
		return this.items;
	}

	getEventById (id) {
		console.log(id)
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			return this.items.find(el => el.id === id)
		} else {
			return null
		}
	}

	addEvent(event){
		const record = {
			id: uuid(),
			... event
		}
		this.items.push(record)
		return record
	}

	updateEvent(id, event){
		const { name, gender, age, email } = event
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
		return this.getEventById(id)
	}

	deleteEvent(id){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1){
			this.items.splice(i, 1)
		}
	}
}

module.exports = new EventRepository();