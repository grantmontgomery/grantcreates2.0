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
      if (entries.length === 1) {
        console.log(window.scrollY)
        const navBar: HTMLElement | null = document.getElementById("navBar")
        if (navBar) {
          return entries[0].intersectionRatio > 0.3
            ? (navBar.style.background = "#0f2027")
            : (navBar.style.background = "#0b171d")
        }
      }
    },
    {
      threshold: [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
    }
  )

  React.useEffect(() => {
    if (hammerAnvilRef.current) {
      observer.observe(hammerAnvilRef.current)
    }
  })
  return (
    <section className={`homePage ${css.homePage}`}>
      <Headline></Headline>
      <Scene hammerAnvilRef={hammerAnvilRef}></Scene>
    </section>
  )
}
