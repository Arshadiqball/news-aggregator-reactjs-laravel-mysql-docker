import React from "react"
import { SpinnerContainer, LoadingCircle } from "./index"

function Loading({ leftPosition }) {
  return (
    <SpinnerContainer leftPosition={leftPosition}>
      <LoadingCircle />
    </SpinnerContainer>
  )
}

export default Loading
