//console.log('*** EVENT ***');

class Event {
	// constructeur
	constructor (title="", dateTime="", createDateTime="", creator="", users = [], id=null) {
		this.id = id;
		this.title = title;
		this.dateTime = dateTime;
		this.createDateTime = createDateTime;
		this.creator = creator;
		this.users = users;
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
	getCreateDateTime () {
    	return this.createDateTime;
	}
	getCreator () {
    	return this.creator;
	}
	getUsers () {
    	return this.users;
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
	setCreateDateTime (createDateTime) {
		this.createDateTime = createDateTime;
	}
	setCreator (creator) {
		this.creator = creator;
	}
	setUsers (users) {
		this.users = users;
	}
	// autres
	addUser (user, joinDateTime) {
		this.users += [{"user": user, "joinDateTime": joinDateTime}]
	}

	// recuperation des données
	getJson () {
		return {"id":getId(), "title":getTitle(), "dateTime":getDateTime(), "createDateTime":getCreateDateTime(), "creator":getCreator(), "users":getUsers()}
	}
}