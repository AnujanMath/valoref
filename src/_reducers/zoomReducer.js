const zoomOptions = {
    option: 'fit'
}

const zoomReducer = (state = zoomOptions, action) => {
    switch (action.type) {
        case 'SET_ZOOM':
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default zoomReducer