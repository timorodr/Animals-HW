// ******* DEPENDENCIES

const express = require("express")
const router = express.Router()

// bring in our controller
const animalController = require("../controllers/animals.js")
// ****** ROUTES - INDUCESS





// *INDEX - GET render all of the books 
router.get("/", animalController.index)


// *NEW - GET for the form to create a new book
router.get("/new", animalController.newForm)



// * DELETE 
router.delete("/:id", animalController.destroy)



//* UPDATE
router.put("/:id", animalController.update) 




// *CREATE - POST
router.post("/", animalController.create)



//* EDIT 
router.get("/edit/:id", animalController.edit)



// * SEED - GET
router.get("/seed", animalController.seed)



// *SHOW - GET rendering only one book
router.get("/:id", animalController.show)


module.exports = router