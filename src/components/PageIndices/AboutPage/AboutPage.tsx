import * as React from "react"
import { LoadingAssets } from "../../LoadingAssets"
import css from "./AboutPage.module.css"

export const AboutPage = () => {
  return (
    <section id="about" className={`${css.about}`}>
      <LoadingAssets></LoadingAssets>
    </section>
  )
}
