import Sidenav from "../components/newSideNav"
import React from "react"
import { createStore } from "redux"
import SwitchListSecondary from "../components/main-content/switchBoard.js"

import { Provider, connect } from "react-redux"

const initialState = {
  wall: false,
  label: true,
}
function settingsReducer(state = initialState, action) {
  /* https://stackoverflow.com/questions/36786244/nested-redux-reducers */
  switch (action.type) {
    case "TOGGLE_WALL":
      return { ...state, wall: !state.wall }
    case "TOGGLE_LABEL":
      return { ...state, label: !state.label }

    default:
      return state
  }
}
const mapStateToProps = state => {
  return {
    wall: state.wall,
    label: state.label,
  }
}
const Component = ({ wall, label, handleWallToggle, handleLabelToggle }) => (
  <div>
    <h1>Helloworld React & Redux! {wall ? "10" : "5"}</h1>
    <button onClick={handleWallToggle}>Toggle meeeeeeeeeeeeeeee</button>
    <SwitchListSecondary wall={wall} label={label} handleWallToggle={handleWallToggle} handleLabelToggle={handleLabelToggle} />
  </div>
)
const mapDispatchToProps = dispatch => {
  return {
    handleWallToggle: () => dispatch({ type: "TOGGLE_WALL" }),
    handleLabelToggle: () => dispatch({ type: "TOGGLE_LABEL" }),


  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Component)
let store = createStore(settingsReducer)

export default function IndexPage() {
  return (
    <Provider store={store}>
      <Container />
      <Sidenav />
    </Provider>
  )
}
