const {Router} = require("express")
const app = module.exports = Router()

// Déclaration de sroutes pour /Events
app.route('/Events')
	.get(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json({message : "Liste de tous les evenements", events : [EventData], method : req.method});
	})
	.post(function(req,res)
	{
		res.status(201)
		res.header({'content-type': 'application/json'})
		res.json({message : "Ajout d'un evenement", event : EventData, method : req.method});
	});

app.route('/Events/:eventID')
	.get(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json({message : "Un evenement", event : EventData, method : req.method});
	})
	.put(function(req, res)
	{
		res.status(202)
		res.header({'content-type': 'application/json'})
		res.json({message : "Mise a jour d'un evenement", event : EventData, method : req.method});
	})
	.delete(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json({message : "Suppression d'un evenement", method : req.method});
	});