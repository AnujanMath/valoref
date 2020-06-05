const initialState = {
  wall: false,
  label: true,
  map: "",
  agent: "",
  side: "defend",
  imageArray: []
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
      return { ...state, map: action.payload }
    case "SET_SIDE":
      console.log(state, action)
      return { ...state, side: action.payload }
    case "SET_AGENT":
      console.log(state, action)
      return { ...state, agent: action.payload }
    case "RETURN_QUERY":
      console.log(state, action)
      return { ...state, imageArray: action.payload }

    default:
      return state
  }
}

export default settingsReducer
