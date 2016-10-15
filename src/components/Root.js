import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configureStore from '../configureStore'
import routes from '../routes'

export default () => { 
  return <Provider store={configureStore()}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
}
