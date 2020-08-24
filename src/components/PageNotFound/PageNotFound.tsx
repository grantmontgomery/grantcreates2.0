import * as React from "react"
import { Anvil } from "../Logos"
import css from "./PageNotFound.module.css"

export const PageNotFound: React.FC = () => {
  return (
    <section id="404" className={css.pageNotFound}>
      <div className={css.messageWrapper}>
        <Anvil location="notFound"></Anvil>
        <span>404</span>
      </div>
    </section>
  )
}
