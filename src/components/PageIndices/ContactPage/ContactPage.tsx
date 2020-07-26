import * as React from "react"
import css from "./ContactPage.module.css"

type Props = {
  contactRef: React.Ref<HTMLElement>
}

export const ContactPage: React.FC<Props> = ({ contactRef }) => {
  return (
    <section
      id="contact"
      ref={contactRef}
      className={`${css.contact}`}
    ></section>
  )
}
