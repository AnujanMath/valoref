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
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: 'linear-gradient(180deg, #FF7D87 0%, #FF4654 100%) !important'

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

export default function PermanentDrawerLeft() {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        width
      >
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 2}
            classes={{ selected: classes.active }}

            onClick={event => handleListItemClick(event, 2)}
          >
            <FormatListBulletedIcon />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            classes={{ selected: classes.active }}

            onClick={event => handleListItemClick(event, 3)}
          >
            <HelpOutlineIcon />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <Typography paragraph>Test</Typography>
      </main>
    </div>
  )
}
