//console.log('*** PROMO ***');

class Promo {
	constructor (name="", alias="", id=null) {
		this.id = id;
		this.name = name;
		this.alias = alias;
	}
	// getters
	exports.getId () {
    	return this.id;
	}
	exports.getName () {
    	return this.name;
	}
	exports.getAlias () {
    	return this.alias;
	}
	// setters
	exports.setId (id) {
		this.id = id;
	}
	exports.setName (name) {
		this.name = name;
	}
	exports.setAlias (alias) {
		this.alias = alias;
	}

	// recuperation des données
	exports.getJson () {
		return {"id":getId(), "name":getName(), "alias":getAlias()}
	}
}
