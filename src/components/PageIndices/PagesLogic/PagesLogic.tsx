import * as React from "react"
import { HomePage } from "../HomePage"
import { AboutPage } from "../AboutPage"
import { ContactPage } from "../ContactPage"
import { homePageContext } from "./Context"

export const PagesLogic: React.FC = () => {
  const hammerAnvilRef = React.useRef<HTMLDivElement | null>(null)
  const creationsRef = React.useRef<HTMLElement | null>(null)
  const aboutRef = React.useRef<HTMLElement | null>(null)
  const contactRef = React.useRef<HTMLElement | null>(null)

  React.useLayoutEffect(() => {
    hammerAnvilRef.current?.focus()
    creationsRef.current?.focus()
    aboutRef.current?.focus()
    contactRef.current?.focus()
  })

  const { Provider } = homePageContext

  return (
    <React.Fragment>
      <Provider
        value={{ hammerAnvilRef: hammerAnvilRef, creationsRef: creationsRef }}
      >
        <HomePage></HomePage>
      </Provider>

      <AboutPage aboutRef={aboutRef}></AboutPage>
      <ContactPage contactRef={contactRef}></ContactPage>
    </React.Fragment>
  )
}
