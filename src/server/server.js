const bodyParser = require("body-parser")
const cors = require("cors")

const express = require("express")

const nodemailer = require("nodemailer")
const app = express()

// app.use(cors())
app.get("/", () => {
  res.send("hello world!")
})

app.listen(5000, () => console.log("Server started on port 5000"))
