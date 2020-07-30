const React = require("react")
const { ModalProvider } = require("./src/state/ModalGlobal")

exports.wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>
}
