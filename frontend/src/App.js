import React, {useEffect} from "react"
import RouteComponent from "./route"

function App() {
  useEffect(() => {
    document.title = "News Aggregate"
  }, [])

  return (
    <RouteComponent />
  )
}

export default App
