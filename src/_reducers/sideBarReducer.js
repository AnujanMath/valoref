const sideOptions = {
    index: -1,
    show: false
}

const showSideBarReducer = (state = sideOptions, action) => {
    console.log(state);
    switch (action.type) {
        case 'SET_PAGE':
            if (state.index === action.payload || state.index === -1 || state.show === false)
                state.show = !state.show;
            state.index = action.payload;
            return state;
        default:
            return state;
    }
}
export default showSideBarReducer