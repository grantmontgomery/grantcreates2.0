const bodyParser = require("body-parser")
const cors = require("cors")
require(`dotenv`).config()

const express = require("express")

const nodemailer = require("nodemailer")
//transporter: the object that is able to send the email
//transport: the transport config object, connection url or a transport plugin instance
//defaults an object defines default values for mail options

// const transporter = nodemailer.createTransport()

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(cors())
// app.get("/send", (req, res) => {
//   res.send("<h1>Hello World</h1>")
// })

app.post(
  "/send",
  ({ body: { name, phone, email, subject, message, company } }, res) => {
    const output = `
  <p>A new visitor reached out!</p>
  <h3>Message Details</h3>
  <ul>
  <li>Name: ${name} </li>
  <li>Company: ${company} </li>
  <li>Phone: ${phone} </li>
  <li>Email: ${email} </li>
  <li>Subject: ${subject} </li>
  <li>Message: ${message} </li>
  </ul>
  `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: `gmail`,
      host: `smtp.gmail.com`,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${process.env.GATSBY_EMAIL_SENDER}`, // generated ethereal user
        pass: `${process.env.GATSBY_EMAIL_SENDER_PASSWORD}`, // fake password.
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    const mailoptions = {
      from: `"Grant Creates Visitor"`,
      to: `grant@grantcreates.com`,
      subject: `Visitor Contact Request`,
      text: `Hello World?`,
      html: output,
    }

    transporter.sendMail(mailoptions, (error, info) => {
      if (error) {
        return console.log(error), res.send(error)
      }

      console.log(`Message sent`, info.messageId)
      res.send(info)
    })
  }
)

app.listen(5000, () => console.log("Server started on port 5000"))
