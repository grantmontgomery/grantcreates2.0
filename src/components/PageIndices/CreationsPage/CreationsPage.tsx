import * as React from "react"
import css from "./CreationsPage.module.css"

interface Props {
  location: string
}

export const CreationsPage = ({ location }: Props) => {
  return (
    <section id="creations" className={`${css.creations} ${css[location]}`}>
      <div className={`${css.headerWrapper}`}>
        <h1>Creations</h1>
      </div>
      <ul className={`${css.creationTypes}`}>
        <li className={`${css.type}`}>
          <span>Apps</span>
        </li>
        <li className={`${css.type}`}>
          <span>Websites</span>
        </li>
        <li className={`${css.type}`}>
          <span>Designs</span>
        </li>
        <li className={`${css.type}`}>
          <span>Experiences</span>
        </li>
      </ul>
    </section>
  )
}
