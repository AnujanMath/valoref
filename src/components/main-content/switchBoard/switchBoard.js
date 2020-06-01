import React from 'react';
import { render } from "react-dom"
import Popover from "@material-ui/core/Popover"
import Button from "@material-ui/core/Button"
import SettingsIcon from "@material-ui/icons/Settings"
import CloseIcon from "@material-ui/icons/Close"

import SwitchListSecondary from "./switchBoardContent.js"

import { useSelector, useDispatch } from "react-redux"
//WORK IN PROGRESS MOVING SWITCHBOARD TO ONE COMPONENT

export default function SwitchBoard() {
    const wall = useSelector(state => state.settingsReducer.wall);
    const label = useSelector(state => state.settingsReducer.label);

    return (
        <Button
            aria-describedby={id}
            onClick={handleClick}
            variant="contained"
            color="primary"
        >
            {open ? (<CloseIcon style={{ color: "#7a7a7a" }} />) : (<SettingsIcon style={{ color: "#7a7a7a" }} />)}
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
        >
            <SwitchListSecondary wall={wall} label={label} handleWallToggle={() => dispatch(handleWallToggle())} handleLabelToggle={() => dispatch(handleLabelToggle())} />
        </Popover>
        )
}
