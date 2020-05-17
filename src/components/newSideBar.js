import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    left: 70,
    backgroundColor: '#16191C',
    boxShadow: '4px 0px 20px'
  }
});
const maps = ['Haven', 'Bind', 'Split'];

const characters = ['Breach', 'Brimstone', 'Cypher', 'Jett', 'Omen', 'Phoenix', 'Raze', 'Sage', 'Sova', 'Viper']

export default function SideBar({ showSideBar }) {
  console.log(showSideBar)
  const [state, setState] = React.useState({
    left: false
  });
  const classes = useStyles();

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ state, left: !state.left });
  };
  const list = () => (

    <Box
      style={{ width: 250, color: 'white' }}
    >
      <List >
        {maps.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {characters.map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {/* <Button onClick={toggleDrawer()}>Settings</Button> */}
      <Drawer
        BackdropProps={{ invisible: true }}
        classes={{ paper: classes.paper }}
        style={{ postion: 'absolute', left: 100 }}
        open={showSideBar}
        variant="persistent"
        onClick={toggleDrawer()} >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}