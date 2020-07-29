const React = require("react")
const { ModalProvider } = require("./src/state/ModalGlobal")
const { NavProvider } = require("./src/state/NavGlobal")

exports.wrapRootElement = ({ element }) => {
  return (
    <NavProvider>
      <ModalProvider>{element}</ModalProvider>
    </NavProvider>
  )
}
