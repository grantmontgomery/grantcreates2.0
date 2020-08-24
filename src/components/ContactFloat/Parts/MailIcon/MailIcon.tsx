import * as React from "react"
import css from "./MailIcon.module.css"

type Props = {
  handleTap: () => void
}

export const MailIcon: React.FC<Props> = ({ handleTap }) => {
  return (
    <div className={css.iconWrapper} onClick={handleTap}>
      {/* <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 905 605"
        enableBackground="new 0 0 905 605"
        className={css.icon}
      >
        <defs>
          <filter id="topFold">
            <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
          </filter>
          <filter id="leftFold">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="cyan" />
          </filter>
          <filter id="rightFold">
            <feDropShadow
              dx="-0.8"
              dy="-0.8"
              stdDeviation="0"
              floodColor="pink"
              floodOpacity="0.5"
            />
          </filter>
          <filter id="bottomFold">
            <feDropShadow
              dx="-0.8"
              dy="-0.8"
              stdDeviation="0"
              floodColor="pink"
              floodOpacity="0.5"
            />
          </filter>
        </defs>
        <linearGradient
          id="mailGradient1"
          gradientUnits="userSpaceOnUse"
          x1="742.5261"
          y1="158.9535"
          x2="725.5759"
          y2="1976.0139"
        >
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.1764" stopColor="#FAFAFA" />
          <stop offset="0.3854" stopColor="#ECECEC" />
          <stop offset="0.6108" stopColor="#D4D4D4" />
          <stop offset="0.8462" stopColor="#B3B3B3" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
        <line
          className={`${css.st2}`}
          x1="578.46"
          y1="278.46"
          x2="901.35"
          y2="601.35"
          strokeWidth="4px"
        />
        <line
          className={`${css.st146}`}
          x1="3.96"
          y1="601.02"
          x2="323.87"
          y2="281.11"
          strokeWidth="4px"
        />
        <line
          className={`${css.st146}`}
          x1="455.43"
          y1="381.28"
          x2="898.71"
          strokeWidth="4px"
          y2="5.7"
        />
        <line
          className={`${css.st146}`}
          x1="452.5"
          y1="383.76"
          x2="4.7"
          strokeWidth="4px"
          y2="4.36"
        />

        <polygon
          //   className={`${css.st8}`}
          className={css.topFold}
          filter={`url(#topFold)`}
          points="902.49,602.49 2.49,602.49 327.3,277.68 452.5,383.76 577.69,277.69 		"
        />

        <polygon
          className={`${css.rightFold}`}
          filter="url(#rightFold)"
          points="902.49,2.49 902.49,602.49 577.69,277.69 		"
        />

        <polygon
          className={css.leftFold}
          filter="url(#leftFold)"
          points="327.3,277.68 2.49,602.49 2.49,2.49 		"
        />
        <polygon
          className={css.bottomFold}
          filter="url(#bottomFold)"
          points="902.49,2.49 577.69,277.69 452.5,383.76 327.3,277.68 2.49,2.49 	"
        />
      </svg> */}
      <svg
        version="1.1"
        className={css.icon}
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
    </div>
  )
}
