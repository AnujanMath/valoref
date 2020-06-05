const abilityOptions = {
    id: null,
    showPanel: false,
}

const abilityReducer = (state = abilityOptions, action) => {
    switch (action.type) {
        case 'SET_ABILITY_ID':
            if (action.payload == state.id || !state.id)
                state.showPanel = !state.showPanel;
            state.id = action.payload;
            return state;
        default:
            return state;
    }
}
export default abilityReducer