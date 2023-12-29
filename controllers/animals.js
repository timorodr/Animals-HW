// ********** DEPENDENCIES



// No middleware - remove the req.model. infront of book
// const book = require("../models/Book")
// * EXPORT
module.exports = {
    index,
    newForm,
    destroy,
    update,
    create,
    edit,
    show,
    seed
}


// ROUTE CONTROLLERS

async function index(req, res) {
    // find all of the animals
    let animals = await req.model.Animal.find({})
    // render all of the animals to index.ejs
    res.render("index.ejs", {
        animals: animals.reverse()
    })
}
async function newForm(req, res) {
    res.render("new.ejs") // render the file
}
async function destroy(req, res) {
    try {
         // Find a book and then delete
         let deletedAnimal = await req.model.Animal.findByIdAndDelete(req.params.id)
         console.log(deletedAnimal)
         // redirect back to the index
         res.redirect("/animals")
 
    } catch (error) {
     res.status(500).send("Somehting went wrong when deleting")
    }
 }
async function update(req, res) {
    try{// handle our checkbox
        if(req.body.extinct === "on")  {
            req.body.extinct = true
        } else {
            req.body.extinct = false
        }
        // Then find by id and update with the req.body
        // findByIdAndUpdate - id, data to update, options obj
        let updatedAnimal = await req.model.Animal.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {
                new: true
            }
        )
        // redirect to the show route with the updated book
        res.redirect(`/animals/${updatedAnimal._id}`)
    } catch (error) {
        res.send("something went wrong")
    }
}
async function create(req, res) {
    try {
        if(req.body.extinct === "on") {
            //if checked
            req.body.extinct = true
        } else {
            // if not checked
            req.body.extinct = false
    
        }
        let newAnimal = await req.model.Animal.create(req.body)
        res.redirect("/animals")
    } catch (err) {
        res.send(err)
    }
}
async function edit(req, res) {
    try {
        //find the book and edit
        let foundAnimal = await req.model.Animal.findById(req.params.id)
        res.render("edit.ejs", {
            animal: foundAnimal
        })
    } catch (error) {
        res.send("hello from the errerrereerer")
    }
}
async function seed(req, res) {

    try {
        // delete everything in the database
        await req.model.Animal.deleteMany({})
        // Create data in the database
        await req.model.Animal.create(
            req.model.seedData
        )
        // redirect back to the index
        res.redirect("/animals")
    } catch (error) {
        res.send("Somefing went wrong with your seeds")
    }
}
async function show(req, res) {
    // find book by _id
    let foundAnimal = await req.model.Animal.findById(req.params.id) // this is the request params object
    console.log(foundAnimal)
    // render show.ejs with the found book
    res.render("show.ejs", {
        animal: foundAnimal
    })
}