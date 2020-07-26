import * as React from "react"
import css from "./AboutPage.module.css"

type Props = {
  aboutRef: React.Ref<HTMLElement>
}

export const AboutPage: React.FC<Props> = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} id="about" className={css.about}>
      <div className={css.headerWrapper}>
        <div>About</div>
      </div>
    </section>
  )
}
