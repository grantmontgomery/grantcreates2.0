import * as React from "react"
import { Headline } from "../../Headline"
import { Scene } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"
import { CreationsPage } from "../CreationsPage"

export const HomePage: React.FC = () => {
  return (
    <section className={`homePage ${css.homePage}`}>
      <Headline></Headline>
      <Scene></Scene>
    </section>
  )
}
