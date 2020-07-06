import * as React from "react"
import css from "./CreationsPage.module.css"

interface Props {
  location: string
}

export const CreationsPage = ({ location }: Props) => {
  return (
    <section
      id="creations"
      className={`${css.creations} ${css[location]}`}
    ></section>
  )
}
