const {Router} = require("express")
const app = module.exports = Router()


const {addPromo, getPromoById, getPromosList, updatePromo, deletePromo} = require('../controllers/promoController')

// Declaration de routes pour /Promos
app.route('/')
.get(getPromosList)
.post(addPromo);

app.route('/:promoID')
.get(getPromoById)
.put(updatePromo)
.delete(deletePromo);
