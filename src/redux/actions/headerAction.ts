interface Action {
  type: boolean
}

export const headerAction = ({ type }: Action) => {
  return type
}
