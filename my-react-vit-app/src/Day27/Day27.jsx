import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store';
import Reduxfun from './Reduxfun';

function Day27() {
  return (
    <div>
      <Provider store = {store}>
        <Reduxfun/>
      </Provider>
    </div>
  )
}

export default Day27
