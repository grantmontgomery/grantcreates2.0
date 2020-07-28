import * as React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import css from "./MailIcon.module.css"

export const MailIcon = ({ setState }) => {
  // const { data } = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "MailIconCompressed.png" }) {
  //       childImageSharp {
  //         fluid {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data)
  return (
    <div
      className={css.iconWrapper}
      onClick={() => setState(state => ({ ...state, tapped: true }))}
    >
      {/* <svg
        version="1.1"
        viewBox="0 0 905 605"
        enableBackground="new 0 0 905 605"
        className={css.bottomFold}
      >
        <polygon
          fill="#FFFFFF"
          points="902.49,602.49 2.49,602.49 327.3,277.68 452.5,383.76 577.69,277.69 		"
        />
      </svg>
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 905 605"
        enableBackground="new 0 0 905 605"
        className={css.leftFold}
      >
        <polygon fill="#FFFFFF" points="327.3,277.68 2.49,602.49 2.49,2.49 		" />
      </svg> */}

      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 905 605"
        enableBackground="new 0 0 905 605"
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
      </svg>
    </div>
  )
}
