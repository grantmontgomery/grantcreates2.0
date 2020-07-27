/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { ContactFloat } from "./ContactFloat"
import { Nav } from "./Nav"

export const Layout = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
      <ContactFloat></ContactFloat>
    </React.Fragment>
  )
}
