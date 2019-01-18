const {Router} = require("express")
const app = module.exports = Router()

// Déclaration de routes pour /Reviews
app.route('/Reviews')
	.get(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json([ReviewData]);
	})
	.post(function(req,res)
	{
		res.status(201)
		res.header({'content-type': 'application/json'})
		res.json({ReviewData});
	});

app.route('/Reviews/:reviewID')
	.get(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json({ReviewData});
	})
	.put(function(req, res)
	{
		res.status(202)
		res.header({'content-type': 'application/json'})
		res.json({message : "Mise a jour d'une review", review : ReviewData, method : req.method});
	})
	.delete(function(req, res)
	{
		res.status(200)
		res.header({'content-type': 'application/json'})
		res.json({message : "Suppression d'une review", method : req.method});
	});