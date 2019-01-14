promos = [{id: 1, name: 'Dev-A2', alias: 'Autistart+'}]

function getPromos(){
	return promos;
}

function getPromoById(id){
	for (var i = 0; i < promos.length; i++) {
		if (promos[i][id] == id){
			return promos[i];
		}
	}
	return null;
}

function addPromo(name, alias){
	newPromo = {id: (promos[promos.length - 1][id])+1, name: name, alias: alias}
}