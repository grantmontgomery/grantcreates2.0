import * as React from "react"
import css from "./ScrollOpacity.module.css"

export const ScrollOpacity: React.FC = () => {
  return (
    <React.Fragment>
      <div id="opacityBar1" className={css.opacityBar1}></div>
      <div id="opacityBar2" className={css.opacityBar2}></div>
    </React.Fragment>
  )
}
