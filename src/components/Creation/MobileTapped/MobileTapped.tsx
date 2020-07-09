import * as React from "react"
import css from "./MobileTapped.module.css"

export const MobileTapped = () => {
  return (
    <div className={`${css.tappedWrapper}`}>
      <div className={`${css.imageWrapper}`}>
        <img src="" alt="" />
      </div>
      <div className={`${css.detailsWrapper}`}>
        <div className={`${css.titleWrapper}`}>Seknd (Second)</div>
        <div className={`${css.descriptionWrapper}`}></div>
        <div className={`${css.technologiesWrapper}`}></div>
        <div className={`${css.linksWrapper}`}></div>
      </div>
    </div>
  )
}
