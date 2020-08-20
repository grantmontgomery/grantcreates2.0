import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import {
  Nav,
  HomePage,
  AboutPage,
  CreationsPage,
  ContactFloat,
  ToolsPage,
  PagesLogic,
  Scene,
  Headline,
  Layout,
} from "../components"
import smoothscroll from "smoothscroll-polyfill"
import "./index.css"
import { ContactPage } from "../components/PageIndices"

const IndexPage = () => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
  return (
    <Layout>
      <HomePage></HomePage>
      <CreationsPage></CreationsPage>
      <AboutPage></AboutPage>
      <ToolsPage></ToolsPage>
      <ContactPage></ContactPage>
    </Layout>
  )
}

export default IndexPage
