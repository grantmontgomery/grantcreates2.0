import React, { useRef, useState } from "react"
import {
  TestComponent,
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  LoadingAssets,
  BoxTest,
} from "../components"
import { Link } from "gatsby"
import { Canvas } from "react-three-fiber"
import "./index.css"

const IndexPage = () => {
  const [loading, load] = useState(false)

  const loadingFunc = () => {
    return !loading ? <div className="loading">Loading...</div> : null
  }
  React.useEffect(() => {
    load(true)
  }, [])
  return (
    <LoadingAssets></LoadingAssets>
    // <React.Fragment>
    //   <Nav></Nav>
    //   <main>
    //     <HomePage></HomePage>
    //     <AboutPage></AboutPage>
    //     <CreationsPage location="desktop"></CreationsPage>
    //   </main>
    //   {loadingFunc()}
    // </React.Fragment>
  )
}

export default IndexPage
