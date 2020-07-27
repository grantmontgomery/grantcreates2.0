import { createStore } from "redux"

const reducer = (state = { check: true }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState)
}
