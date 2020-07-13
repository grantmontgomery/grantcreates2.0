import React from "react"
import { LoadingAssets } from "./components/LoadingAssets"
import { Chain, LoadingAnvil } from "./components/LoadingAssets"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          id="___loader"
          key={`loader`}
          style={{
            background: "#0F2027",
            height: "100%",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <LoadingAssets
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            height="45vh"
            width="auto"
          ></LoadingAssets>
          {/* <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <LoadingAnvil height="45vh" width="auto"></LoadingAnvil>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Chain height="45vh" width="auto"></Chain>
          </div> */}
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
