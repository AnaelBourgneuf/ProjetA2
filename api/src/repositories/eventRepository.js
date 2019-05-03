const uuid = require('uuid')

class EventRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00').toString(), createDateTime: new Date('January 18, 2019 10:10:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()},{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'Pizza', dateTime: new Date('March 10, 2019 10:10:00').toString(), createDateTime: new Date('January 3, 2019 13:45:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', title: 'KFC du Mardi', dateTime: new Date('February 5, 2019 10:9:00').toString(), createDateTime: new Date('January 5, 2019 16:00:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]}
		]
	}

	getEvents () {
		return this.items;
	}

	getEventById (id) {
		//console.log(id)
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
			createDateTime: new Date().toString(),
			users: [],
			... event
		}
		this.items.push(record)
		return record
	}

	updateEvent(id, event){
		const { title, dateTime, createDatetime, creator } = event
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			if (title) {
				this.items[i].title = title
			}
			if (dateTime) {
				this.items[i].dateTime = dateTime
			}
			if (createDatetime) {
				this.items[i].createDateTime = createDatetime
			}
			if (creator) {
				this.items[i].creator = creator
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

	addUser(id, userId){
		const infos = {
			user : userId,
			joinDateTime : new Date().toString()
		}
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			this.items[i].users.push(infos)
		}
		return this.getEventById(id)
	}
}

module.exports = new EventRepository();