import * as React from "react"

type ContextProps = {
  [key: string]: React.Ref<HTMLElement>
}
export const homePageContext = React.createContext<Partial<ContextProps>>({})
