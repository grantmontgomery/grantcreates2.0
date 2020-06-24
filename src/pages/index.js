import React from "react"
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
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <CreationsPage></CreationsPage>
    </React.Fragment>
  )
}

export default IndexPage
