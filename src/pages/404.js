import React from "react"
import { Anvil } from "../components"
import css from "./404.module.css"

export const PageNotFound = () => {
  return (
    <section id="404">
      <div className={css.messageWrapper}>
        <Anvil></Anvil>
        <span>404</span>
      </div>
    </section>
  )
}
