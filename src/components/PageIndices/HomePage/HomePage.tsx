import * as React from "react"
import { Scene } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <section className={`homePage ${css.homePage}`}>
      <Scene></Scene>
    </section>
  )
}
