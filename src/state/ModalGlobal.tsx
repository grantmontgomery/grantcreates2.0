import * as React from "react"
import { ModalState } from "../globalTypes"

type Action = {
  type: string
}

const modalReducer: React.Reducer<ModalState, Action> = (
  state: ModalState,
  action
) => {
  switch (action.type) {
    case "NAV_LINKS":
      return {
        modal: true,
        windows: {
          ...state.windows,
          navLinks: true,
        },
      }
    case "CREATION":
      return {
        modal: true,
        windows: {
          ...state.windows,
          creation: true,
        },
      }
    case "CONTACT_FLOAT":
      return {
        modal: true,
        windows: {
          ...state.windows,
          contactFloat: true,
        },
      }
    case "CLOSE":
      return {
        modal: false,
        windows: {
          navLinks: false,
          creation: false,
          contactFloat: false,
        },
      }
    default:
      return state
  }
}

const ModalStateContext = React.createContext<ModalState | undefined>(undefined)
const ModalDispatchContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(modalReducer, {
    modal: false,
    windows: {
      navLinks: false,
      contactFloat: false,
      creation: false,
    },
  })
  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}

export const useModalState = (): ModalState => {
  const context = React.useContext(ModalStateContext)
  if (undefined === context) {
    throw new Error("Please use within ModalProvider.")
  }
  return context
}

export const useModalDispatch = (): React.Dispatch<Action> => {
  const context = React.useContext(ModalDispatchContext)
  if (undefined === context) {
    throw new Error("Please use within ModalProvider.")
  }
  return context
}
