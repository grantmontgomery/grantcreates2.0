import * as React from "react"
import { LinksWrapper } from "../../LinksWrapper"
import css from "./MobileLinks.module.css"
import { CSSTransition } from "react-transition-group"

interface Props {
  menu: boolean
}

export const MobileLinks = ({ menu }: Props) => {
  return menu ? (
    <CSSTransition
      timeout={250}
      classNames={{
        enter: css["links-enter"],
        enterActive: css["links-enter-active"],
        exit: css["links-exit"],
        exitActive: css["links-exit-active"],
      }}
    >
      <LinksWrapper location="mobileNav"></LinksWrapper>
    </CSSTransition>
  ) : null
}
