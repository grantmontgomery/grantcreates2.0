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

  const iconToUse = () => {
    switch (mailStatus) {
      case "sent":
        return (
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 454.36 303.21"
            enableBackground="new 0 0 454.36 303.21"
          >
            <linearGradient
              id="planeWhite_1_"
              gradientUnits="userSpaceOnUse"
              x1="254.8878"
              y1="136.0061"
              x2="220.1644"
              y2="-1.8663"
            >
              <stop offset="0.0305" stopColor="#666666" />
              <stop offset="0.1101" stopColor="#858585" />
              <stop offset="0.237" stopColor="#B1B1B1" />
              <stop offset="0.3598" stopColor="#D3D3D3" />
              <stop offset="0.4759" stopColor="#EBEBEB" />
              <stop offset="0.5824" stopColor="#FAFAFA" />
              <stop offset="0.6706" stopColor="#FFFFFF" />
            </linearGradient>

            <polygon
              // className={css[`${changeColors()}2`]}
              fill="url(#planeWhite_1_)"
              points="451.86,2.5 73.99,118.93 2.5,49.48 		"
            />
            <linearGradient
              id="planeWhite_2_"
              gradientUnits="userSpaceOnUse"
              x1="283.7169"
              y1="104.1329"
              x2="337.8446"
              y2="325.7499"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>

            <polygon
              // className={css[`${changeColors()}3`]}
              fill="url(#planeWhite_2_)"
              points="451.86,2.5 227.18,300.71 138.38,203.89 106.67,169.31 		"
            />
            <linearGradient
              id="planeWhite_3_"
              gradientUnits="userSpaceOnUse"
              x1="25.4595"
              y1="136.2903"
              x2="405.3744"
              y2="111.7797"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>

            <polygon
              // className={css[`${changeColors()}4`]}
              fill="url(#planeWhite_3_)"
              points="451.86,2.5 106.67,169.31 73.99,239.44 73.99,118.93 		"
            />
            <linearGradient
              id="planeWhite_4_"
              gradientUnits="userSpaceOnUse"
              x1="75.1667"
              y1="199.826"
              x2="105.805"
              y2="209.0175"
            >
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.1764" stopColor="#FAFAFA" />
              <stop offset="0.3854" stopColor="#ECECEC" />
              <stop offset="0.6108" stopColor="#D4D4D4" />
              <stop offset="0.8462" stopColor="#B3B3B3" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>

            <polygon
              fill="url(#planeWhite_4_)"
              points="138.38,203.89 73.99,239.44 106.67,169.31 		"
            />
          </svg>
        )
      case "delivered":
        return (
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 125.03 110"
            enableBackground="new 0 0 125.03 110"
            className={css.greenCheck}
          >
            <polygon points="54.51,81.07 23.98,50.54 31.05,43.46 54.51,66.93 114.98,6.46 122.05,13.54 	" />
            <path
              d="M104.3,38.35l-4.01,4.01c1.13,4.02,1.72,8.26,1.72,12.64c0,26.19-21.31,47.5-47.5,47.5S7.01,81.19,7.01,55
         S28.32,7.5,54.51,7.5c14.33,0,27.2,6.38,35.91,16.45l3.55-3.55C84.35,9.43,70.23,2.5,54.51,2.5C25.56,2.5,2.02,26.05,2.02,55
         s23.55,52.5,52.5,52.5s52.5-23.55,52.5-52.5C107.01,49.18,106.06,43.58,104.3,38.35z"
            />
          </svg>
        )

      case "failed":
        return (
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 110 110"
            enableBackground="new 0 0 110 110"
            className={css.redX}
          >
            <path
              d="M55,107.5C26.05,107.5,2.5,83.95,2.5,55C2.5,26.05,26.05,2.5,55,2.5s52.5,23.55,52.5,52.5
          C107.5,83.95,83.95,107.5,55,107.5z M55,7.5C28.81,7.5,7.5,28.81,7.5,55s21.31,47.5,47.5,47.5s47.5-21.31,47.5-47.5
          S81.19,7.5,55,7.5z"
            />

            <polygon
              fill="#ED4548"
              points="62.07,55 86.82,79.75 79.75,86.82 55,62.07 30.25,86.82 23.18,79.75 47.93,55 23.18,30.25 
            30.25,23.18 55,47.93 79.75,23.18 86.82,30.25 	"
            />
          </svg>
        )
    }
  }

  return (
    <div className={css.senderStatusWrapper}>
      <div
        className={`${css.iconWrapper} ${
          mailStatus === "sent" ? css.planeSending : null
        }`}
      >
        {iconToUse()}
      </div>
      <div className={`${css.statusWrapper} ${css[`${mailStatus}`]}`}>
        {checkStatus()}
      </div>
    </div>
  )
}
