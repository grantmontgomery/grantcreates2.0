import React from "react"
import { Headline, Scene, CreationsPage } from "../components"
import css from "./styles/home/home.module.css"

export const Home = () => {
  return (
    <section className={css.homePage}>
      <Headline></Headline>
      <Scene></Scene>
      <CreationsPage location="mobileHome"></CreationsPage>
    </section>
  )
}
