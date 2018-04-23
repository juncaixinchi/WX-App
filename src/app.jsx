import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    Hello world
  </div>
)

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<App />, app)
