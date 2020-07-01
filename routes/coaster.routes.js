const express = require('express')
const router = express.Router()

const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')



// Aquí los endpoints


// --- MOSTRAR LISTA DE COASTERS ---
router.get('/', (req, res) => {

    Coaster.find()
        .then(allCoasters => res.render('../views/coasters/coasters-index', {
            coasters: allCoasters
        }))
        .catch(err => console.log("error", err))
})

// router.get('/parks', (rep, res) => {
//     Park.find()
//         .then(allParks => res.render('../views/'))
// })

// --- MOSTRAR LOS DETALLES ---

router.get('/:id', (req, res) => {
    Coaster.findById(req.params.id)
    .then(theCoaster => res.render('../views/coasters/coaster-details', theCoaster))
    .catch(err => console.log('error', err))
})


// --- CREAR COASTER ---

router.get('/new', (req, res) => {
    res.render('../views/coasters/new-coaster')
})



router.post('/new', (req, res) => {
    const { name, description, inversions, length, } = req.body

    Coaster.create({ name, description, inversions, length, active: true })
    .then(newCoaster => res.json(newCoaster))
    .catch(err => console.log('error', err))
    
})


// --- ELIMINAR COASTER ---

router.post('/delete?id=xxx', (req, res, next) => {

    Coaster.findByIdAndRemove(req.query.id)
    .then(() => res.redirect('/'))
    .catch(err => console.log('error', err))
})




module.exports = router