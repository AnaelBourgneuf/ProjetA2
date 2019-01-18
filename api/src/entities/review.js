//console.log('*** REVIEW ***');

class Review {
	// constructeur
	constructor (title="", dateTime="", adress="", promo= new Promo(), id=null) {
		this.id = id;
		this.title = title;
		this.dateTime = dateTime;
		this.adress = adress;
		this.promo = promo;
	}
	// getters
	getId () {
    	return this.id;
	}
	getTitle () {
    	return this.title;
	}
	getDateTime () {
    	return this.dateTime;
	}
	getAdress () {
    	return this.adress;
	}
	getPromo () {
    	return this.promo;
	}
	// setters
	setId (id) {
		this.id = id;
	}
	setTitle (title) {
		this.title = title;
	}
	setDateTime (dateTime) {
		this.dateTime = dateTime;
	}
	setAdress (adress) {
		this.adress = adress;
	}
	setPromo (promo) {
		this.promo = promo;
	}

	// recuperation des données
	getJson () {
		return {"id":getId(), "title":getTitle(), "dateTime":getDateTime(), "adress":getAdress(), "promo":getPromo()}
	}
}