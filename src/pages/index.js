import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import allReducers from "../_reducers"
import Sidenav from "../components/sideNav"

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default function IndexPage() {
  return (
    <Provider store={store}>
      <Sidenav />
    </Provider>
  )
}
