import React from 'react'
import {
  Provider,
} from 'react-redux'

import {
  AppNavigator,
} from '../../routes'
import {
  store,
} from '../../utils'

const App = () => (
  <Provider
    store={store}>
    <AppNavigator />
  </Provider>
)

export default App
