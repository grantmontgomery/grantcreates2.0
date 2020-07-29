/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import { ContactFloat } from "./ContactFloat"
import { Nav } from "./Nav"
import { ModalDark } from "./ModalDark"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ModalDark location="layout"></ModalDark>
      <Nav></Nav>
      <ContactFloat></ContactFloat>
      <main>{children}</main>
    </React.Fragment>
  )
}
