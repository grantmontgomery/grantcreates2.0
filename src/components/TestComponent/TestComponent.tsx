import * as React from "react"

let testString: string
testString = "This is a test component"

const TestComponent = () => {
  return <div>{`${testString}`}</div>
}

export default TestComponent
