/*import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'

render(<App />, document.getElementById('app'))*/
import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import { HashRouter } from 'react-router-dom'

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
)


