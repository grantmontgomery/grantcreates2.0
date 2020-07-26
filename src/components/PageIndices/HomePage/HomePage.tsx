import * as React from "react"
import { Headline } from "../../Headline"
import { Scene } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"
import { CreationsPage } from "../CreationsPage"

type Props = {
  headLineRef: React.Ref<HTMLElement>
  creationsRef: React.Ref<HTMLElement>
}

export const HomePage: React.FC<Props> = ({ headLineRef, creationsRef }) => {
  return (
    <section className={`homePage ${css.homePage}`}>
      <Headline></Headline>
      <Scene></Scene>
      <CreationsPage location="mobileHome"></CreationsPage>
    </section>
  )
}
