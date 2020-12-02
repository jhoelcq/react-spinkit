import React from "react"
import Spin from "react-spinkit"
import "react-spinkit/dist/index.css"

const App = () => {
  return (
    <div>
      <h3>Roating Plane</h3>
      <Spin type='roating-plane' size='sm' color='dark' />
      <Spin type='roating-plane' color='primary' />
      <Spin type='roating-plane' size='lg' color='warning' />
    </div>
  )
}

export default App
