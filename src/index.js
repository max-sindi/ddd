import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store/'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css/normalize.css'
// root styles
import './styles/index.scss'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

registerServiceWorker()

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
