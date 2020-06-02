import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted"

import Sidebar from './sideBar';
import MainContent from './main-content/mainContent';
import { Box } from "@material-ui/core"

import { useSelector, useDispatch } from "react-redux"
import { handlePageChange } from '../_actions'

const drawerWidth = 70

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 1
    // zIndex important so that it renders OVER the character selection navbar
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: 'center',
    backgroundColor: "#111315",
  },
  active: {
    background: "linear-gradient(180deg, #FF7D87 0%, #FF4654 100%) !important",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#1F2327',
    //look into material-ui theming
    padding: theme.spacing(3),
    height: '100vh',
  },
}))

export default function PermanentDrawerLeft() {
  const classes = useStyles()

  const showSide = useSelector(state => state.showSideBarReducer.show);
  const index = useSelector(state => state.showSideBarReducer.index);
  const dispatch = useDispatch();

  return (
    <Box className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={index === 0 && showSide}
            classes={{ selected: classes.active }}
            onClick={event => dispatch(handlePageChange(0))}
          >
            <FormatListBulletedIcon style={{ fill: "grey" }} />
          </ListItem>
          <ListItem
            button
            selected={index === 1 && showSide}
            classes={{ selected: classes.active }}
            onClick={event => dispatch(handlePageChange(1))}
          >
            <HelpOutlineIcon style={{ fill: "grey" }} /> {/* TO COMPLETE LATER: Change color after clicking from grey to white */}
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <MainContent></MainContent>
        <Sidebar selectedIndex={index} showSideBar={showSide}></Sidebar>
      </main>
    </Box>
  )
}
