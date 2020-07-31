import * as React from "react"
import { modalActions } from "../../../state/actions"
import { useModalDispatch } from "../../../state/ModalGlobal"
import css from "./ContactPage.module.css"

type Props = {
  contactRef: React.Ref<HTMLElement>
}

export const ContactPage: React.FC<Props> = ({ contactRef }) => {
  const modalDispatch = useModalDispatch()

  const handleTap = () => {
    const body: HTMLBodyElement | null = document.querySelector("body")
    if (body) {
      body.style.overflowY = "hidden"
    }
    return modalDispatch(modalActions("CONTACT_FLOAT"))
  }

  return (
    <section id="contact" ref={contactRef} className={css.contact}>
      <span className={css.header}>Contact</span>
      <div className={css.contact}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 905 605"
          enableBackground="new 0 0 905 605"
        >
          <polygon
            fill="none"
            stroke="white"
            strokeWidth="3vh"
            points="902.49,602.49 2.49,602.49 327.3,277.68 452.5,383.76 577.69,277.69 		"
          />

          <polygon
            fill="none"
            stroke="white"
            strokeWidth="3vh"
            points="902.49,2.49 902.49,602.49 577.69,277.69 		"
          />

          <polygon
            stroke="white"
            strokeWidth="3vh"
            fill="none"
            points="327.3,277.68 2.49,602.49 2.49,2.49 		"
          />
          <polygon
            stroke="white"
            strokeWidth="3vh"
            fill="none"
            points="902.49,2.49 577.69,277.69 452.5,383.76 327.3,277.68 2.49,2.49 	"
          />
        </svg>
        <span>grant@grantcreates.com</span>
      </div>
      <button className={css.hireMe} onClick={handleTap}>
        Hire Me
      </button>
      <div className={css.socialLinks}></div>
    </section>
  )
}
