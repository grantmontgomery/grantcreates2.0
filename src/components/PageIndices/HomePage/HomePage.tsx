import * as React from "react"
import { Headline } from "../../Headline"
import { Scene } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"
import { CreationsPage } from "../CreationsPage"

export const HomePage: React.FC = () => {
  const hammerAnvilRef = React.useRef<HTMLDivElement | null>(null)

  const observer: React.MutableRefObject<
    IntersectionObserver | undefined
  > = React.useRef()

  React.useLayoutEffect(() => {
    hammerAnvilRef.current?.focus()
    observer.current = new IntersectionObserver(
      entries => {
        const opacityBar1: HTMLElement | null = document.getElementById(
          "opacityBar1"
        )
        const opacityBar2: HTMLElement | null = document.getElementById(
          "opacityBar2"
        )
        if (opacityBar1 && opacityBar2) {
          const anvilInView = entries[0].intersectionRatio > 0
          opacityBar1.style.height = anvilInView ? "10vh" : "20vh"
          opacityBar2.style.height = anvilInView ? "10vh" : "20vh"
        }
      },
      {
        threshold: [0, 0.05, 0.1, 0.25, 0.4, 0.45, 0.5],
      }
    )
  })

  React.useEffect(() => {
    if (hammerAnvilRef.current) {
      observer.current?.observe(hammerAnvilRef.current)
    }
  })
  return (
    <section className={css.homePage}>
      <Headline></Headline>
      <Scene hammerAnvilRef={hammerAnvilRef}></Scene>
    </section>
  )
}
