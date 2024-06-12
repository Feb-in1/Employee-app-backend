const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
 
const { employeemodel } = require("./models/employee.js")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://feb:febin4475@cluster0.pydodfi.mongodb.net/Employeedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/", (req, res) => {
    let input = req.body
    let employee = new employeemodel(input)
    employee.save()
    
    res.json({ "status": "Success" })
})
app.post("/search", (req, res) => {
    res.send("Test")
})
app.post("/delete", (req, res) => {
    res.send("Test")
})
app.get("/ViewAll", (req, res) => {
    employeemodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch((error) => {
        res.json(error)
    })

})





app.listen(8080, () => {
    console.log("Server Started")
})
