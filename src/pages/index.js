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
        <Canvas>
          <ambientLight></ambientLight>
          <pointLight position={[10, 10, 10]}></pointLight>
          <BoxTest></BoxTest>
        </Canvas>
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <CreationsPage></CreationsPage>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
