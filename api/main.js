// j'importe les modules
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')

// preparation des routes
const usersRoutes = require('./src/routes/usersRoutes')
const promosRoutes = require('./src/routes/promosRoutes')
const reviewsRoutes = require('./src/routes/reviewsRoutes')
const ideasRoutes = require('./src/routes/ideasRoutes')
const eventsRoutes = require('./src/routes/eventsRoutes')

// je declare les parametres de mon serveur local
const hostname = '0.0.0.0';
const port = 3000;

version = "1.0"

// je declare des variables pour le mocking
var PromoData = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var UserData = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: PromoData, mail: 'prenom.nom@imie.fr', isAdmin: false}
var EventData = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', creator: UserData, users: [{user: UserData, joinDateTime: "11/12/2018 11:11:00"}]}
var IdeaData = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: UserData, reactions: [{user: UserData, state: true, content:"blablabla"}]}
var ReviewData = {id: 1, title: "Module Api", dateTime: "14/12/2018 17:00:00", adress: "http://www.google.com/", promo: PromoData}


//
const app = express()
app.use(bodyParser.urlencoded({ extended: false}))  // parse application/x-www-from-urlencoded
app.use(bodyParser.json())                          // parse application/json

app.listen(port, hostname, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});


//-----------------------------------------------------
//  Maintenant c'est pret, plus qu'à faire les routes |
//-----------------------------------------------------

// un moyen de connaitre la version de l'api
app.get('/', (req, res) => {
	res.send(`API v${version}`)
})

// un autre pour recuperer un uuid aleatoire
app.get('/uuid', (req, res) => {
	res.send(uuid())
})

// et tous les chemins principaux de l'api
app.use('/users', usersRoutes)
app.use('/promos', promosRoutes)
app.use('/reviews', reviewsRoutes)
app.use('/ideas', ideasRoutes)
app.use('/events', eventsRoutes)