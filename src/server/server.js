const bodyParser = require("body-parser")
const cors = require("cors")

const express = require("express")

const nodemailer = require("nodemailer")
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(cors())
// app.get("/send", (req, res) => {
//   res.send("<h1>Hello World</h1>")
// })

app.post("/send", (req, res) => {
  res.send(console.log(req.body))
})

app.listen(5000, () => console.log("Server started on port 5000"))
