import React from "react"
import css from "./styles/about/about.module.css"

export const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} id="about" className={css.about}>
      <div className={css.headerWrapper}>
        <div>About</div>
      </div>
    </section>
  )
}
