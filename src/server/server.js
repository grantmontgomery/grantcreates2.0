require(`dotenv`).config()

const nodemailer = require("nodemailer")
const xoauth2 = require("xoauth2")

exports.handler = async (event, context) => {
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
        from: `"Portfolio Visitor"<nodetest94@aol.com>`,
        to: `grant@grantcreates.com`,
        subject: `Visitor Contact Request`,
        text: `Hello World?`,
        html: output,
      }

      let transporter = nodemailer.createTransport({
        service: `gmail`,
        sendMail: true,
        port: 25,
        secure: false,
        auth: {
          xoauth2: xoauth2.createXOAuth2Generator({
            user: `${process.env.GATSBY_EMAIL_SENDER}`,
            clientId: `458994737075-7v5lp3pnh5u8hns4tti142bbfe4qc9j8.apps.googleusercontent.com`,
            clientSecret: ``,
            refreshToken: ``,
          }),
          // user: `${process.env.GATSBY_EMAIL_SENDER}`,
          // pass: `${process.env.GATSBY_EMAIL_SENDER_PASSWORD}`,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })

      transporter.sendMail(mailoptions, function (error, info) {
        console.log("TRANSPORTER TRIGGERED")
        if (error) {
          reject(JSON.stringify(error))
          console.log(error)
        } else {
          console.log(`Message sent`, info.messageId)
          resolve(JSON.stringify(info))
        }
      })
    })
    return promise
      .then(info => {
        console.log("sending response")
        console.log(info)
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          },
          body: info,
        }
      })
      .catch(error => {
        console.log("sending response")
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          },
          body: error,
        }
      })
  } catch {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: "server failed",
    }
  }
}
