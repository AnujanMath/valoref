const initialState = {
  wall: false,
  label: true,
  map: "",
  agent: "",
  side: "defend"
}

const settingsReducer = (state = initialState, action) => {
  /* https://stackoverflow.com/questions/36786244/nested-redux-reducers */
  switch (action.type) {
    case "TOGGLE_WALL":
      return { ...state, wall: !state.wall }
    case "TOGGLE_LABEL":
      return { ...state, label: !state.label }
    case "SET_MAP":
      console.log(state, action)
      return { ...state, map: action.choice }
    case "SET_SIDE":
      console.log(state, action)
      return { ...state, side: action.choice }
    case "SET_AGENT":
      console.log(state, action)
      return { ...state, agent: action.payload }

    default:
      return state
  }
}

export default settingsReducer
