const zoomOptions = {
    option: 'fit'
}

const showSideBarReducer = (state = zoomOptions, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'SET_ZOOM':
            state = action.payload;
            return state;
        default:
            return state;
    }
}
export default showSideBarReducer