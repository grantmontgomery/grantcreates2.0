import * as React from "react"
import { Anvil } from "../Logos"

let testString: string
testString = "This is a test component"

const TestComponent = () => {
  return (
    <React.Fragment>
      <div>{`${testString}`}</div>
    </React.Fragment>
  )
}

export default TestComponent
