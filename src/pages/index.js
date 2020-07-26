import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import {
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  ContactFloat,
  PagesLogic,
} from "../components"
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
      <Nav></Nav>
      <ContactFloat></ContactFloat>
      <main>
        <PagesLogic></PagesLogic>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
