//console.log('*** IDEA ***');

class Idea {
	// constructeur
	constructor (title="", text="", dateTime="", creator= new User(), id=null) {
		this.id = id;
		this.title = title;
		this.text = text;
		this.dateTime = dateTime;
		this.creator = creator;
	}
	// getters
	getId () {
    	return this.id;
	}
	getTitle () {
    	return this.title;
	}
	getText () {
    	return this.text;
	}
	getDateTime () {
    	return this.dateTime;
	}
	getCreator () {
    	return this.creator;
	}
	getReactions () {
    	return this.reactions;
	}
	// setters
	setId (id) {
		this.id = id;
	}
	setTitle (title) {
		this.title = title;
	}
	setText (text) {
		this.text = text;
	}
	setDateTime (dateTime) {
		this.dateTime = dateTime;
	}
	setCreator (creator) {
		this.creator = creator;
	}
	setReactions (reactions) {
		this.reactions = reactions;
	}
	// autres
	addReaction (user, state, content) {
		this.users += [{"user": user, "state": state, "content": content},]
	}

	// recuperation des données
	getJson () {
		return {"id":getId(), "title":getTitle(), "text":getText(), "dateTime":getDateTime(), "creator":getCreator(), "reactions":getReactions()}
	}
}