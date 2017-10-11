import React from 'react'
import ReactDOM from 'react-dom'
import Debug from 'debug'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import PDF from './PDF'

/* modify debug filter before application starts' */
const debug = Debug('app')
localStorage.debug = '*'

// required by Material UI
injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
      <PDF filePath="a.pdf" />
    </div>
  </MuiThemeProvider>
)

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<App />, app)
