//******** DEPENDENCIES */

require("dotenv").config() // this makes use of our .env variables
require("./config/db.js") // referencing our db config
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const animalRouter = require("./routes/animals.js")


const app = express()
const PORT = process.env.PORT || 3013;
const seedData = require("./models/seed.js")


const Animal = require("./models/Animal.js")



//********* MIDDLEWARE */

app.use((req, res, next) => {
    req.model = {
        Animal
    }
    console.log("this is middleware")
    
    // go to the next app method
    next()
})


app.use(morgan("dev"))
app.use(express.urlencoded({extended: true})) // body parser this is how we get access to req.body
app.use(methodOverride("_method")) // key word to pass to method override lets us use DELETE PUT HTTP verbs
app.use("/public", express.static("public")) // this will serve up our public directory the url prefix of /public.styles.css


//********* ROUTES */

app.use("/animals", animalRouter)
//********** SERVER LISTENER */

app.listen(PORT, () => { console.log(`is this thing on! ${PORT}`)})
