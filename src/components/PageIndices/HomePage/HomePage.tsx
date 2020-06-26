import * as React from "react"
import { HammerAndAnvil } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <section className={`homePage ${css.homePage}`}>
      <HammerAndAnvil></HammerAndAnvil>
    </section>
  )
}
