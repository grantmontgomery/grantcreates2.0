interface State {
  dragged: boolean
}

export const headerReducer = (
  state: State = { dragged: false },
  action: { type: boolean; dragged: boolean }
) => {
  switch (action.type) {
    case true:
      return { dragged: true }
    case false:
      return { dragged: false }
  }
}
