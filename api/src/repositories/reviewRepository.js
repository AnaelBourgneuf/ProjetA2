const uuid = require('uuid')

class ReviewRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Module API', dateTime: new Date('March 10, 2019 10:10:00').toString(), adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4'}
		]
	}

	getReviews () {
		return this.items;
	}

	getReviewById (id) {
		//console.log(id)
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			return this.items.find(el => el.id === id)
		} else {
			return null
		}
	}

	addReview(review){
		const record = {
			id: uuid(),
			dateTime: new Date(),
			... review
		}
		this.items.push(record)
		return record
	}

	updateReview(id, review){
		const { title, dateTime, adress, promo } = review
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			if (title) {
				this.items[i].title = title
			}
			if (dateTime) {
				this.items[i].dateTime = dateTime
			}
			if (adress) {
				this.items[i].adress = adress
			}
			if (promo) {
				this.items[i].promo = promo
			}
		}
		return this.getReviewById(id)
	}

	deleteReview(id){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1){
			this.items.splice(i, 1)
		}
	}
}

module.exports = new ReviewRepository();