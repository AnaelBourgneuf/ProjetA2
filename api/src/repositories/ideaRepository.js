const uuid = require('uuid')

class IdeaRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'idea2', text: 'texte idea 2', dateTime: new Date('March 12, 2019 12:30:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', title: 'idea3', text: 'texte idea 3', dateTime: new Date('March 1, 2019 09:00:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []}
		]
	}

	getIdeas () {
		return this.items;
	}

	getIdeaById (id) {
		//console.log(id)
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
			dateTime: new Date(),
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

	addUser(id, userId){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			const j = this.items[i].plus.findIndex(el => el === userId)
			const k = this.items[i].moins.findIndex(el => el === userId)
			if (k === -1) {
				if (j === -1) {
					this.items[i].plus.push(userId)
				}
			} else {
				this.items[i].moins.splice(j, 1)
			}
		}
		return this.getIdeaById(id)
	}

	subUser(id, userId){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			const j = this.items[i].plus.findIndex(el => el === userId)
			const k = this.items[i].moins.findIndex(el => el === userId)
			if (j === -1) {
				if (k === -1) {
					this.items[i].moins.push(userId)
				}
			} else {
				this.items[i].plus.splice(j, 1)
			}
		}
		return this.getIdeaById(id)
	}
}

module.exports = new IdeaRepository();