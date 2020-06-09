import * as React from "react"
import css from "./FullLogo.module.css"
import { LogoProps } from "../types"

export const FullLogo = ({ location }: LogoProps) => {
  return (
    <div className={`fullLogoWrapper ${location} ${css[`${location}`]}`}></div>
  )
}
