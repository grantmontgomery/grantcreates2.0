/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
  document.getElementById("___gatsby").style.display = "block"
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 200)
}
