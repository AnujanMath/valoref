import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted"

import Sidebar from './newSideBar';
import MainContent from './main-content/mainContent';
import { Box } from "@material-ui/core"

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
    // backgroundColor: theme.palette.background.default,
    backgroundColor: '#1F2327',
    //look into material-ui theming
    padding: theme.spacing(3),
  },
}))

export default function PermanentDrawerLeft() {
  const classes = useStyles()

  const [selectedIndex, setSelectedIndex] = React.useState(-1)

  const [showSideBar, setShowSideBar] = React.useState(false);

  const handleListItemClick = (event, index) => {
    console.log(event, index)
    if (index === 0 || index === 1) {
      setShowSideBar(!showSideBar)
      setSelectedIndex(!showSideBar ? index : -1)
    } else {
      setShowSideBar(false);
      setSelectedIndex(index)
    }
  }
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
            selected={selectedIndex === 0}
            classes={{ selected: classes.active }}
            onClick={event => handleListItemClick(event, 0)}
          >
            <FormatListBulletedIcon style={{ fill: "grey" }} />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            classes={{ selected: classes.active }}
            onClick={event => handleListItemClick(event, 1)}
          >
            <HelpOutlineIcon style={{ fill: "grey" }} /> {/* TO COMPLETE LATER: Change color after clicking from grey to white */}
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <Sidebar selectedIndex={selectedIndex} showSideBar={showSideBar}></Sidebar>
        <MainContent></MainContent>
      </main>
    </Box>
  )
}
