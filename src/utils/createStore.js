import {
  configureStore,
  getDefaultMiddleware,
} from 'redux-starter-kit'

import reducers from '../slices'

const configureAppStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../slices', () => store.replaceReducer(reducers))
  }
  return store
}

export default configureAppStore