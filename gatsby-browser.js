// const React = require("react")
// const { GlobalStateProvider } = require("./src/state")

// exports.wrapRootElement = ({ element }) => {
//   return <GlobalStateProvider>{element}</GlobalStateProvider>
// }

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.opacity = "0"
    console.log("loader changed.")
  }, 1000)
  setTimeout(() => {
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
