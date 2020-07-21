import React, { useRef, useState } from "react"
import {
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  ContactFloat,
} from "../components"
import { Link } from "gatsby"
import "./index.css"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
      <ContactFloat></ContactFloat>
      <main>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <CreationsPage location="desktop"></CreationsPage>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
