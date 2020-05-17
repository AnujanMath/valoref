import React from "react"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles, Box } from "@material-ui/core"
import ListSubheader from "@material-ui/core/ListSubheader"

const useStyles = makeStyles({
  paper: {
    left: 70,
    backgroundColor: "#16191C",
    boxShadow: "4px 0px 20px",
  },
})
const maps = ["Haven", "Bind", "Split"]

const characters = [
  "Breach",
  "Brimstone",
  "Cypher",
  "Jett",
  "Omen",
  "Phoenix",
  "Raze",
  "Sage",
  "Sova",
  "Viper",
]

export default function SideBar({ showSideBar }) {
  console.log(showSideBar)
  const [state, setState] = React.useState({
    left: false,
  })
  const classes = useStyles()

  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ state, left: !state.left })
  }
  const list = () => (
    <Box style={{ width: 250, color: "white" }}>
      <List
        subheader={
          <ListSubheader
            style={{ color: "#A3A3A3" }}
            component="div"
            id="nested-list-subheader"
          >
            Select a map
          </ListSubheader>
        }
      >
        {maps.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader
            style={{ color: "#A3A3A3" }}
            component="div"
            id="nested-list-subheader"
          >
            Select an agent
          </ListSubheader>
        }
      >
        {characters.map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      {/* <Button onClick={toggleDrawer()}>Settings</Button> */}
      <Drawer
        BackdropProps={{ invisible: true }}
        classes={{ paper: classes.paper }}
        style={{ postion: "absolute", left: 100 }}
        open={showSideBar}
        variant="persistent"
        onClick={toggleDrawer()}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  )
}
