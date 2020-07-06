import React, { useRef } from "react"
import {
  TestComponent,
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  BoxTest,
} from "../components"
import { Link } from "gatsby"
import { Canvas } from "react-three-fiber"
import "./index.css"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
      <main>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <CreationsPage location="desktop"></CreationsPage>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
