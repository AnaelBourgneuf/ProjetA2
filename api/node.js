const http = require('http');
const express = require('express');

//Je declare des variables utiles
var PromoData = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var UserData = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: PromoData, mail: 'prenom.nom@imie.fr', isAdmin: false}
var EventData = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', users: [{user: UserData, joinDateTime: "11/12/2018 11:11:00"}]}
var IdeaData = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: UserData}
var ReviewData = {id: 1, title: "Module Api", dateTime: "14/12/2018 17:00:00", adress: "http://www.google.com/", promo: PromoData}


//je declare les parametres de mon serveur local
const hostname = '127.0.0.1';
const port = 3000;

//je declare l'url de mon api (swagger)
const apiUrl = 'virtserver.swaggerhub.com/AnaelBM/testApi/v1';

var app = express();
var monRouter = express.Router();


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




//Décalaration de routes pour /Users
monRouter.route('/Users')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Liste de tous les utilisateurs", users : [UserData], method : req.method});
})
.post(function(req,res)
{
	res.status(201)
	res.header({'content-type': 'application/json'})
    res.json({message : "Ajout d'un utilisateur", user : UserData, method : req.method});
});

monRouter.route('/Users/:userID')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Un utilisateur", user : UserData, method : req.method});
})
.put(function(req, res)
{
	res.status(202)
	res.header({'content-type': 'application/json'})
	res.json({message : "Mise a jour d'un utilisateur", user : UserData, method : req.method});
})
.delete(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Suppression d'un utilisateur", method : req.method});
});

// Déclaration de sroutes pour /Events
monRouter.route('/Events')
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

monRouter.route('/Events/:eventID')
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

// Déclaration de sroutes pour /Ideas
monRouter.route('/Ideas')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Liste de toutes les idees", ideas : [IdeaData], method : req.method});
})
.post(function(req,res)
{
	res.status(201)
	res.header({'content-type': 'application/json'})
    res.json({message : "Ajout d'une idee", idea : IdeaData, method : req.method});
});

monRouter.route('/Ideas/:ideaID')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Une idee", idea : IdeaData, method : req.method});
})
.put(function(req, res)
{
	res.status(202)
	res.header({'content-type': 'application/json'})
	res.json({message : "Mise a jour d'une idee", idea : IdeaData, method : req.method});
})
.delete(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Suppression d'une idee", method : req.method});
});

// Déclaration de sroutes pour /Promos
monRouter.route('/Promos')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Liste de toutes les promos", promos : [PromoData], method : req.method});
})
.post(function(req,res)
{
	res.status(201)
	res.header({'content-type': 'application/json'})
    res.json({message : "Ajout d'une promo", promo : PromoData, method : req.method});
});

monRouter.route('/Promos/:promoID')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Une promo", promo : PromoData, method : req.method});
})
.put(function(req, res)
{
	res.status(202)
	res.header({'content-type': 'application/json'})
	res.json({message : "Mise a jour d'une promo", promo : PromoData, method : req.method});
})
.delete(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Suppression d'une promo", method : req.method});
});

// Déclaration de sroutes pour /Reviews
monRouter.route('/Reviews')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Liste de toutes les reviews", reviews : [ReviewData], method : req.method});
})
.post(function(req,res)
{
	res.status(201)
	res.header({'content-type': 'application/json'})
    res.json({message : "Ajout d'une review", review : ReviewData, method : req.method});
});

monRouter.route('/Reviews/:reviewID')
.get(function(req, res)
{
	res.status(200)
	res.header({'content-type': 'application/json'})
	res.json({message : "Une review", review : ReviewData, method : req.method});
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


// Nous demandons à l'application d'utiliser notre routeur
app.use(monRouter);