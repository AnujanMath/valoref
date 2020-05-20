const initialState = {
    wall: false,
    label: true,
  }

const settingsReducer = (state = initialState, action) => {
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

export default settingsReducer