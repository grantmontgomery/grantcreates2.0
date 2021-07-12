require(`dotenv`).config()

const nodemailer = require("nodemailer")
const { google } = require(`googleapis`)
const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"

const oauth2Client = new OAuth2(
  process.env.GATSBY_CLIENT_ID,
  process.env.GATSBY_CLIENT_SECRET,
  OAUTH_PLAYGROUND
)

exports.handler = async (event, context) => {
  try {
    const sendEmailPromise = new Promise((resolve, reject) => {
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
        from: `"Portfolio Visitor"`,
        to: `grant@grantcreates.com`,
        subject: `Visitor Contact Request`,
        text: `Hello World?`,
        html: output,
      }

      oauth2Client.setCredentials({
        refresh_token: process.env.GATSBY_EMAIL_REFRESH_TOKEN,
      })

      const accessToken = oauth2Client.getAccessToken()

      let transporter = nodemailer.createTransport({
        service: `gmail`,
        sendMail: true,
        auth: {
          type: "OAuth2",
          user: process.env.GATSBY_EMAIL_SENDER,
          clientId: process.env.GATSBY_CLIENT_ID,
          clientSecret: process.env.GATSBY_CLIENT_SECRET,
          refreshToken: process.env.GATSBY_EMAIL_REFRESH_TOKEN,
          accessToken,
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
    return sendEmailPromise
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
