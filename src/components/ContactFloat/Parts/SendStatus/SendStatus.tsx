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
        return "Couldn't Deliver"
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
