//console.log('*** USER ***');

class User {
	// constructeur
	constructor (firstName="", name="", birthD="", alias="", promo= new Promo(), mail="", isAdmin=false, id=null) {
		this.id = id;
		this.firstName = firstName;
		this.name = name;
		this.birthD = birthD;
		this.alias = alias;
		this.promo = promo;
		this.mail = mail;
		this.isAdmin = isAdmin;
	}
	// getters
	getId () {
    	return this.id;
	}
	getFirstName () {
    	return this.firstName;
	}
	getName () {
    	return this.name;
	}
	getBirthD () {
    	return this.birthD;
	}
	getAlias () {
    	return this.alias;
	}
	getPromo () {
    	return this.promo;
	}
	getMail () {
    	return this.mail;
	}
	getIsAdmin () {
    	return this.isAdmin;
	}
	// setters
	setId (id) {
		this.id = id;
	}
	setFirstName (firstName) {
		this.firstName = firstName;
	}
	setName (name) {
		this.name = name;
	}
	setBirthD (birthD) {
		this.birthD = birthD;
	}
	setAlias (alias) {
		this.alias = alias;
	}
	setPromo (promo) {
		this.promo = promo;
	}
	setMail (mail) {
		this.mail = mail;
	}
	setIsAdmin (isAdmin) {
		this.isAdmin = isAdmin;
	}

	// recuperation des données
	getJson () {
		return {"id":getId(), "firstName":getFirstName(), "name":getName(), "birthD":getBirthD(), "alias":getAlias(), "promo":getPromo(), "mail":getMail(), "isAdmin":getIsAdmin()}
	}
}
