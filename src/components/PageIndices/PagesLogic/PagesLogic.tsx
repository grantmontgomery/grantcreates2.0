import * as React from "react"
import { CreationsPage } from "../CreationsPage"
import { HomePage } from "../HomePage"
import { AboutPage } from "../AboutPage"
import { ContactPage } from "../ContactPage"

const PagesLogic: React.FC = () => {
  const headLineRef = React.useRef<HTMLElement | null>(null)
  const creationsRef = React.useRef<HTMLElement | null>(null)
  const aboutRef = React.useRef<HTMLElement | null>(null)
  const contactRef = React.useRef<HTMLElement | null>(null)
  return (
    <React.Fragment>
      <HomePage
        headLineRef={headLineRef}
        creationsRef={creationsRef}
      ></HomePage>
      <CreationsPage location="desktop"></CreationsPage>
      <AboutPage aboutRef={aboutRef}></AboutPage>
      <ContactPage contactRef={contactRef}></ContactPage>
    </React.Fragment>
  )
}
