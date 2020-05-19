import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
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
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText style={{color:"white"}} id="switch-list-label-wifi" primary="Spawn Walls" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            style={{ color:"linear-gradient(180deg, #FF7D87 0%, #FF4654 100%) !important"}}
            onChange={handleToggle('wifi')}
            checked={state.toggle}
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>

        <ListItemText style={{color:"white"}} id="switch-list-label-bluetooth" primary="Labels" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('bluetooth')}
            checked={state.toggle}
            inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
