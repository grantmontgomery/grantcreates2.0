const React = require("react")
const { ModalProvider } = require("./src/state/ModalGlobal")

exports.wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>
}

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.opacity = "0"
  }, 1000)
  setTimeout(() => {
    document.getElementById("___loader").remove()
  }, 1500)
  setTimeout(() => {
    document.getElementById("___gatsby").style.display = "block"
  }, 1500)
  setTimeout(() => {
    document.getElementById("___gatsby").style.opacity = 1
  }, 2000)
  clearTimeout()
}
