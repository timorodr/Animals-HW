//******* DEPENDENCIES */ //******* DATABASE CONFIGURATION */


const mongoose = require("mongoose")
const db = mongoose.connection

// Connected to our database
mongoose.connect(process.env.DATABASE_URL)


//Set up our Connection status listeners
db.on("error", (err) => {console.log(err.message + `something went wrong with mongo`)})
db.on("connected", () => {console.log("mongo connected")})
db.on("closed", () => {console.log("mongo disconnected")})