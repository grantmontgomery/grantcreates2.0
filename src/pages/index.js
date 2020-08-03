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
import "./index.css"
import { ContactPage } from "../components/PageIndices"

const IndexPage = () => {
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
