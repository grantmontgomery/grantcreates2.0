import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import {
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  ContactFloat,
  PagesLogic,
  Layout,
} from "../components"
import { Home } from "./home"
import { Link } from "gatsby"
import "./index.css"

const IndexPage = () => {
  // return (
  //   <React.Fragment>
  //     <Nav></Nav>
  //     <ContactFloat></ContactFloat>
  //     <main>
  //       <HomePage></HomePage>
  //       <CreationsPage location="desktop"></CreationsPage>

  //       <AboutPage></AboutPage>
  //     </main>
  //   </React.Fragment>
  // )
  return (
    <React.Fragment>
      <Layout></Layout>
      <main>
        <Home></Home>
        {/* <PagesLogic></PagesLogic> */}
      </main>
    </React.Fragment>
  )
}

export default IndexPage
