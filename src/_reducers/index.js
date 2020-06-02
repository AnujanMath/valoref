//this is for combinging all reducers so its less messy in the src/index.js file
import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import showSideBarReducer from './sideBarReducer'
import zoomReducer from './zoomReducer'
import abilityReducer from './abilityReducer'

const allReducers = combineReducers({
    settingsReducer,
    showSideBarReducer,
    zoomReducer,
    abilityReducer
})

export default allReducers;