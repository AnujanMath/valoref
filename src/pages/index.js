import Sidenav from "../components/newSideNav"
import React from "react"
import { createStore } from "redux"
import SwitchListSecondary from "../components/main-content/switchBoard.js"

import { Provider, connect } from "react-redux"
const countReducer = function (state = true, action) { //how do we make state support more than just one 
  switch (action.type) {
    case "toggle":
      return !state
    default:
      return state
  }
}
const mapStateToProps = state => {
  return {
    count: state,
  }
}
const Component = ({ count, handleToggle }) => (
  <div>
    <h1>Helloworld React & Redux! {count ? "10" : "5"}</h1>
    <button onClick={handleToggle}>Toggle meeeeeeeeeeeeeeee</button>
    <SwitchListSecondary toggle={count} />
  </div>
)
const mapDispatchToProps = dispatch => {
  return {
    handleToggle: () => dispatch({ type: "toggle" }),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Component)
let store = createStore(countReducer)

export default function IndexPage() {
  return (
    <Provider store={store}>
      <Container />
      <Sidenav />
    </Provider>
  )
}
