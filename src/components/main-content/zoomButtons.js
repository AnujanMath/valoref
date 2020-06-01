import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import { Box, Grid, Button, ButtonGroup } from "@material-ui/core"

import { handleZoom } from "../../_actions"
import { useSelector, useDispatch } from "react-redux"


export default function ContinuousSlider({ zoom }) {
    const option = useSelector(state => state.zoomReducer.option)
    const dispatch = useDispatch()

    return (
        <div>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button onClick={() => zoom('zoom in')}><AddIcon htmlColor="white" /></Button>
                <Button onClick={() => zoom('zoom out')}><RemoveIcon htmlColor="white" /></Button>
                <Button onClick={() => zoom('fit')}><ZoomOutMapIcon htmlColor="white" /></Button>
            </ButtonGroup>
        </div>
    );
}