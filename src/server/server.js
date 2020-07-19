const bodyParser = require("body-parser")
const cors = require("cors")

const express = require("express")

const nodemailer = require("nodemailer")
//transporter: the object that is able to send the email
//transport: the transport config object, connection url or a transport plugin instance
//defaults an object defines default values for mail options

// const transporter = nodemailer.createTransport()

const app = express()

console.log(process.env.GATSBY_BROWSER)

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
