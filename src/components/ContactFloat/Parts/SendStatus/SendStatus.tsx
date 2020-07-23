import * as React from "react"
import css from "./SendStatus.module.css"

type Props = {
  mailStatus: string
}

export const SendStatus: React.FC<Props> = ({ mailStatus }) => {
  const checkStatus = () => {
    switch (mailStatus) {
      case "sent":
        return "Sending..."
      case "delivered":
        return "Delivered!"
      case "failed":
        return "Not Delivered"
    }
  }

  return (
    <div className={css.senderStatusWrapper}>
      <div className={`${css.statusWrapper} ${css[`${mailStatus}`]}`}>
        {checkStatus()}
      </div>
    </div>
  )
}
