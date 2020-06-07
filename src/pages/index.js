import React from "react"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk';

import allReducers from "../_reducers"
import Sidenav from "../components/sideNav"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#16191C'
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});
export default function IndexPage() {
  return (
    // figure out how to remove srollbar
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Sidenav />
      </MuiThemeProvider>
    </Provider>
  )
}
