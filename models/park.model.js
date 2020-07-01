const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const ParkSchema = new Schema({
    name: String,
    description: String,
    active: Boolean
},
    {
        timestamps: true
    
});

const Park = mongoose.model('Park', ParkSchema)

module.exports = Park