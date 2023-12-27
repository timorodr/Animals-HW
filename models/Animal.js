//***************** DEPENDENCIES */

const mongoose = require("mongoose")

// Creating Schema
const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

// COMPOSE OUR MODEL FROM THE SCHEMA
const Animal = mongoose.model("Animal", animalSchema)

module.exports = Animal