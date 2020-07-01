const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')
//const Coaster = require('../models/coaster.model')

// Aquí los endpoints

router.get('/new', (req, res) => {
    res.render('../views/parks/new-park.hbs')
})
router.post('/new', (req, res) => {
    const { name, description } = req.body

    Park.create({ name, description, active: true })
    .then(newPark => res.json(newPark))
    .catch(err => console.log("error en BBDD", err))
    

})


// --- MOSTRAR PARQUES ---
// router.get('/', (req, res) => {

//     Park.find()
//         .then(allParks => res.render('../views/coasters/coasters-index', {
//             parks: allParks
//         }))
//         .catch(err => console.log("error", err))
// })


module.exports = router