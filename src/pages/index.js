import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import {
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  ContactFloat,
  PagesLogic,
  Scene,
  Headline,
  Layout,
} from "../components"
import { Home } from "./home"
import { Link } from "gatsby"
import "./index.css"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout></Layout>
      <main>
        <section className="homePage">
          <Headline></Headline>
          <Scene></Scene>
          <CreationsPage location="mobileHome"></CreationsPage>
        </section>
        {/* <PagesLogic></PagesLogic> */}
      </main>
    </React.Fragment>
  )
}

export default IndexPage
