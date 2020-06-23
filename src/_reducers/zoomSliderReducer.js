const zoomOptions = {
    function: null
}

const zoomSliderReducer = (state = zoomOptions, action) => {
    switch (action.type) {
        case 'SET_ZOOM_SLIDER':
            state.function = action.payload;
            return state;
        default:
            return state;
    }
}
export default zoomSliderReducer