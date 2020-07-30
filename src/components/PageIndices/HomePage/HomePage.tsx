import * as React from "react"
import { Headline } from "../../Headline"
import { Scene } from "../../HammerAndAnvil"
import css from "./HomePage.module.css"
import { CreationsPage } from "../CreationsPage"

export const HomePage: React.FC = () => {
  const hammerAnvilRef = React.useRef<HTMLDivElement | null>(null)

  React.useLayoutEffect(() => {
    hammerAnvilRef.current?.focus()
  })

  const observer = new IntersectionObserver(
    entries => {
      const opacityBar1: HTMLElement | null = document.getElementById(
        "opacityBar1"
      )
      const opacityBar2: HTMLElement | null = document.getElementById(
        "opacityBar2"
      )
      if (opacityBar1 && opacityBar2) {
        if (entries[0].intersectionRatio > 0) {
          opacityBar1.style.height = "10vh"
          opacityBar2.style.height = "10vh"
        } else {
          opacityBar1.style.height = "20vh"
          opacityBar2.style.height = "20vh"
        }
      }
    },
    {
      threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
    }
  )

  React.useEffect(() => {
    if (hammerAnvilRef.current) {
      observer.observe(hammerAnvilRef.current)
    }
  })
  return (
    <section className={css.homePage}>
      <Headline></Headline>
      <Scene hammerAnvilRef={hammerAnvilRef}></Scene>
    </section>
  )
}
