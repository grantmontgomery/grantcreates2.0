import React, { useRef } from "react"
import {
  TestComponent,
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
} from "../components"
import { Link } from "gatsby"
import "./index.css"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
      <main>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <CreationsPage></CreationsPage>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
