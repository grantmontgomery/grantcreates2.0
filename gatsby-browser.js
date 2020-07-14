/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.opacity = "0"
    console.log("loader changed.")
  }, 1000)
  setTimeout(() => {
    document.getElementById("___loader").style.display = "none"
    console.log("loader removed")
  }, 2000)
  setTimeout(() => {
    document.getElementById("___gatsby").style.display = "block"
  }, 2000)
  setTimeout(() => {
    document.getElementById("___gatsby").style.opacity = 1
  }, 3000)
}
