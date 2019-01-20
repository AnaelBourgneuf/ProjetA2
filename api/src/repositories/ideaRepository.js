const uuid = require('uuid')

class IdeaRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00'), creator: 1},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'idea2', text: 'texte idea 2', dateTime: new Date('March 12, 2019 12:30:00'), creator: 1},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', title: 'idea3', text: 'texte idea 3', dateTime: new Date('March 1, 2019 09:00:00'), creator: 1}
		]
	}

	getIdeas () {
		return this.items;
	}

	getIdeaById (id) {
		console.log(id)
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			return this.items.find(el => el.id === id)
		} else {
			return null
		}
	}

	addIdea(idea){
		const record = {
			id: uuid(),
			... idea
		}
		this.items.push(record)
		return record
	}

	updateIdea(id, idea){
		const { title, text, dateTime, creator } = idea
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			if (title) {
				this.items[i].title = title
			}
			if (text) {
				this.items[i].text = text
			}
			if (dateTime) {
				this.items[i].dateTime = dateTime
			}
			if (creator) {
				this.items[i].creator = creator
			}
		}
		return this.getIdeaById(id)
	}

	deleteIdea(id){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1){
			this.items.splice(i, 1)
		}
	}
}

module.exports = new IdeaRepository();