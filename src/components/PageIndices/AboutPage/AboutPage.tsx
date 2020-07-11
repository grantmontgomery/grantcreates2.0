import * as React from "react"
import { Chain } from "../../LoadingAssets"
import css from "./AboutPage.module.css"

export const AboutPage = () => {
  return (
    <section id="about" className={`${css.about}`}>
      <Chain></Chain>
    </section>
  )
}
