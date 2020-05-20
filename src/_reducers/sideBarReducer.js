const sideOptions = {
    main: false,
    faq: false
}

const showSideBarReducer = (state = sideOptions, action) => {
    switch (action.type) {
        case 'MAIN':
            return !state.main;
        case 'FAQ':
            return !state.faq;
        default:
            return state;
    }
}
export default showSideBarReducer