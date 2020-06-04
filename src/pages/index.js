import React from "react"
import { TestComponent, Nav } from "../components"
import { Link } from "gatsby"
import "./index.css"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
      <div>Home</div>
      <TestComponent></TestComponent>
    </React.Fragment>
  )
}

export default IndexPage
