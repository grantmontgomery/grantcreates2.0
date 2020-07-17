/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import { wrapRootElement } from "./src/redux"

// export const wrappedElement = wrapRootElement

const React = require("react")
const { Provider } = require("react-redux")
const thunk = require("redux-thunk")
const { allReducers } = require("./src/redux")
const { createStore, compose, applyMiddleware } = require("redux")

const store = createStore(
  allReducers,
  compose(
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

exports.wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.opacity = "0"
    console.log("loader changed.")
  }, 1000)
  setTimeout(() => {
    // document.getElementById("___loader").style.display = "none"
    document.getElementById("___loader").remove()
    console.log("loader removed")
  }, 1500)
  setTimeout(() => {
    document.getElementById("___gatsby").style.display = "block"
  }, 1500)
  setTimeout(() => {
    document.getElementById("___gatsby").style.opacity = 1
  }, 2000)
}
