const uuid = require('uuid')

class EventRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00'), createDateTime: new Date('January 18, 2019 10:10:00'), creator: 1, users: [{user: 1, joinDateTime: new Date('February 3, 2019 10:9:00')},{user: 2, joinDateTime: new Date('February 3, 2019 10:9:00')}]},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'Pizza', dateTime: new Date('March 10, 2019 10:10:00'), createDateTime: new Date('January 3, 2019 13:45:00'), creator: 1, users: [{user: 1, joinDateTime: new Date('February 3, 2019 10:9:00')} ,{user: 2, joinDateTime: new Date('February 3, 2019 10:9:00')}]},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', title: 'KFC du Mardi', dateTime: new Date('February 5, 2019 10:9:00'), createDateTime: new Date('January 5, 2019 16:00:00'), creator: 1, users: [{user: 1, joinDateTime: new Date('February 3, 2019 10:9:00')} ,{user: 2, joinDateTime: new Date('February 3, 2019 10:9:00')}]}
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