import React from "react"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles, Box } from "@material-ui/core"
import ListSubheader from "@material-ui/core/ListSubheader"
import Typography from "@material-ui/core/Typography"
import { useSelector, useDispatch } from "react-redux"
import { handleMapChange, handleAgentChange } from "../_actions"

const useStyles = makeStyles({
  paper: {
    left: 70,
    backgroundColor: "#16191C",
    boxShadow: "4px 0px 20px",
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, 0.16) !important"
  }
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

export default function SideBar({ showSideBar, selectedIndex }) {

  const map = useSelector(state => state.settingsReducer.map);
  const agent = useSelector(state => state.settingsReducer.agent);
  const sideOptions = useSelector(state => state.showSideBarReducer);
  const dispatch = useDispatch();


  const [isOpen, setisOpen] = React.useState(false)
  const classes = useStyles()

  const toggleDrawer = () => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      console.log('toggle draw')
    setisOpen(!isOpen)
  }

  const FAQ = () => (
    <Box style={{ width: 250, color: "white" }}>
      <List
        subheader={
          <ListSubheader
            style={{ color: "#A3A3A3" }}
            component="div"
            id="nested-list-subheader"
          >
            Help & FAQ
          </ListSubheader>
        }
      >
        <ListSubheader>
          <ListItemText>

            <Typography style={{ color: "white" }} variant="h6">
              How do I submit my own tip and screenshots?
            </Typography>
            <Typography style={{ color: "#88898A" }} variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede
            </Typography>

          </ListItemText>
        </ListSubheader>
      </List>
    </Box>
  )
  const main = () => (
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
          <ListItem classes={{ selected: classes.active }} onClick={(event) => dispatch(handleMapChange(text))} selected={map === text} button key={text}>
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
          <ListItem classes={{ selected: classes.active }} onClick={(event) => dispatch(handleAgentChange(text))} selected={agent === text} button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const content = () => {
    switch (selectedIndex) {
      case 0:
        return main();

      case 1:
        return FAQ();

      default:
        break;
    }

  }

  return (
    <React.Fragment>
      <Drawer
        BackdropProps={{ invisible: true }}
        classes={{ paper: classes.paper }}
        style={{ postion: "absolute", left: 100 }}
        open={showSideBar}
        variant="persistent"
      >
        {content()}
      </Drawer>
    </React.Fragment>
  )
}
