import * as React from "react"
import { string } from "prop-types"
import { LogoProps } from "../types"
import css from "./Anvil.module.css"

export const Anvil = ({ location }: LogoProps) => {
  return (
    <div className={`${location} ${css[`${location}`]}`}>{`${location}`}</div>
  )
}
