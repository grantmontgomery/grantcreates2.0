import * as React from "react"
import css from "./AboutPage.module.css"

export const AboutPage: React.FC = () => {
  return (
    <section id="about" className={css.about}>
      <div className={css.headerWrapper}>
        <div>About</div>
      </div>
    </section>
  )
}
