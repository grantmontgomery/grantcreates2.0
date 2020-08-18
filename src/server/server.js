const nodemailer = require("nodemailer")
const { call } = require("file-loader")
require(`dotenv`).config()

exports.handler = async event => {
  try {
    const promise = new Promise((resolve, reject) => {
      const newJSON = JSON.parse(event.body)

      const output = `
    <p>A new visitor reached out!</p>
    <h3>Message Details</h3>
    <ul>
    <li>Name: ${newJSON.name} </li>
    <li>Company: ${newJSON.company} </li>
    <li>Phone: ${newJSON.phone} </li>
    <li>Email: ${newJSON.email} </li>
    <li>Subject: ${newJSON.subject} </li>
    <li>Message: ${newJSON.message} </li>
    </ul>
    `

      const mailoptions = {
        from: `"Portfolio Visitor"<nodetest69@gmail.com>`,
        to: `grant@grantcreates.com`,
        subject: `Visitor Contact Request`,
        text: `Hello World?`,
        html: output,
      }

      let transporter = nodemailer.createTransport({
        service: `gmail`,
        host: `smtp.gmail.com`,
        sendMail: true,
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

      transporter.sendMail(mailoptions, function (error, info) {
        console.log("TRANSPORTER TRIGGERED")
        if (error) {
          reject(error)
          console.log(error)
        } else {
          console.log(`Message sent`, info.messageId)
          resolve(info)
        }
      })
    })
    return promise
      .then(info => {
        return { statusCode: 200, body: info }
      })
      .catch(error => {
        return { statusCode: 200, body: error }
      })
  } catch {
    return {
      statusCode: 500,
      body: "Server failed",
    }
  }
}
