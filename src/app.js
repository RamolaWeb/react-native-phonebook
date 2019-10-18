import React from 'react'
import {
  Provider,
} from 'react-redux'

import {
  AppNavigator,
} from './routes'
import {
  configureAppStore,
} from './utils'

const store = configureAppStore()
const App = () => (
  <Provider
    store={store}>
    <AppNavigator />
  </Provider>
)
export default App
