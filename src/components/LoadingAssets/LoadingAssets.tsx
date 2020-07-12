import * as React from "react"
import { Chain } from "./Chain"
import { LoadingAnvil } from "./LoadingAnvil"
import css from "./LoadingAssets.module.css"

export const LoadingAssets = () => {
  return (
    // <div className={`${css.assets}`}>
    <React.Fragment>
      <div className={css.chainWrapper}>
        <Chain></Chain>
      </div>
      <div className={css.anvilWrapper}>
        <LoadingAnvil></LoadingAnvil>
      </div>
    </React.Fragment>

    // </div>
  )
}
