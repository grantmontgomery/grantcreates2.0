import { GoogleApis } from "googleapis"
import { google } from "googleapis"
import { HttpMethod } from "googleapis-common"
import nodemailer from "nodemailer"
require("dotenv").config()

const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"

const oauth2Client = new OAuth2(
  process.env.GATSBY_CLIENT_ID,
  process.env.GATSBY_CLIENT_SECRET,
  OAUTH_PLAYGROUND
)

exports.handler = async (event, context) => {
  try {
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

    const accessToken = await oauth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      sendMail: true,
      auth: {
        type: "OAUTH2",
        user: process.env.GATSBY_EMAIL_SENDER,
        clientId: process.env.GATSBY_CLIENT_ID,
        clientSecret: process.env.GATSBY_CLIENT_SECRET,
        refreshToken: process.env.GATSBY_EMAIL_REFRESH_TOKEN,
        accessToken,
      },
    })
    const sendMailResponse = await transporter.sendMail(mailoptions)

    if (sendMailResponse.rejected.length > 0) {
      throw new Error("Email rejected")
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify(sendMailResponse),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: error.message,
    }
  }
}
