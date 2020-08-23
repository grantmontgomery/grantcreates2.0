import React from "react"
import { Anvil } from "../components"
import css from "./404.module.css"

export const PageNotFound = () => {
  return (
    <section id="404" className={css.pageNotFound}>
      <div className={css.messageWrapper}>
        <Anvil location="notFound"></Anvil>
        <span>404</span>
      </div>
    </section>
  )
}
