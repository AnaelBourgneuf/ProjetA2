const uuid = require('uuid')

class PromoRepository {

	constructor () {
		this.items = [
			{ id: '3651ac54-d393-495b-b2ae-a26616de3fc4', name: 'IT-Start', alias: null},
			{ id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', name: 'Dev-A2', alias: null},
			{ id: '488351f0-699a-4828-adba-4275c954efdb', name: 'Dev-A3', alias: null}
		]
	}

	getPromos () {
		return this.items;
	}

	getPromoById (id) {
		//console.log(id)
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			return this.items.find(el => el.id === id)
		} else {
			return null
		}
	}

	addPromo(promo){
		const record = {
			id: uuid(),
			... promo
		}
		this.items.push(record)
		return record
	}

	updatePromo(id, promo){
		const { name, alias} = promo
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1) {
			if (name) {
				this.items[i].name = name
			}
			if (alias) {
				this.items[i].alias = alias
			}
		}
		return this.getPromoById(id)
	}

	deletePromo(id){
		const i = this.items.findIndex(el => el.id === id)
		if (i !== -1){
			this.items.splice(i, 1)
		}
	}
}

module.exports = new PromoRepository();