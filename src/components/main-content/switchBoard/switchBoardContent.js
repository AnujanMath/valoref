import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "#16191C",
  },
}));

export default function SwitchListSecondary(state) {
  console.log(state)
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText style={{ color: "white" }} id="switch-list-label-wifi" primary="Spawn Walls" />
        <Switch
          edge="end"
          style={{ color: "linear-gradient(180deg, #FF7D87 0%, #FF4654 100%) !important" }}
          onChange={state.handleWallToggle}
          checked={state.wall}
          inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
        />
      </ListItem>
      <ListItem>

        <ListItemText style={{ color: "white" }} id="switch-list-label-bluetooth" primary="Labels" />
        <Switch
          edge="end"
          onChange={state.handleLabelToggle}
          checked={state.label}
          inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
        />
      </ListItem>
    </List>
  );
}
