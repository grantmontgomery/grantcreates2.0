import React, { useRef, useState } from "react"
import {
  TestComponent,
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  LoadingAssets,
  BoxTest,
  ContactFloat,
} from "../components"
import { Link } from "gatsby"
import { Canvas } from "react-three-fiber"
import "./index.css"

const IndexPage = () => {
  const [loading, load] = useState(false)

  React.useEffect(() => {
    load(true)
  }, [])
  return (
    // <LoadingAssets></LoadingAssets>
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
