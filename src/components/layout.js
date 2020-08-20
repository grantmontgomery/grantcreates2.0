/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import { ContactFloat } from "./ContactFloat"
import { ScrollOpacity } from "./ScrollOpacity"
import { Nav } from "./Nav"
import { ModalDark } from "./ModalDark"
import { useEffect } from "react"

export const Layout = ({ children }) => {
  useEffect(() => {
    window.scroll({
      behavior: "smooth",
    })
  }, [])

  return (
    <React.Fragment>
      <ModalDark></ModalDark>
      <Nav></Nav>
      <ContactFloat></ContactFloat>
      <main>{children}</main>
      <ScrollOpacity></ScrollOpacity>
    </React.Fragment>
  )
}
