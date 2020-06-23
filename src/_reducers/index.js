//this is for combinging all reducers so its less messy in the src/index.js file
import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import showSideBarReducer from './sideBarReducer'
import zoomReducer from './zoomReducer'
import abilityReducer from './abilityReducer'
import zoomSliderReducer from './zoomSliderReducer'

const allReducers = combineReducers({
    settingsReducer,
    showSideBarReducer,
    zoomReducer,
    abilityReducer,
    zoomSliderReducer
})

export default allReducers;