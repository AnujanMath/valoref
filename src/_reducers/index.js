//this is for combinging all reducers so its less messy in the src/index.js file
import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import showSideBarReducer from './sideBarReducer'
import zoomReducer from './zoomReducer'

const allReducers = combineReducers({
    settingsReducer,
    showSideBarReducer,
    zoomReducer
})

export default allReducers;