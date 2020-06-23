import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"

import { useSelector } from "react-redux"
const useStylesSlider = makeStyles({
    root: {
        width: 200,
        padding: 3,
        paddingBottom: 0
    },
});
const useStylesCard = makeStyles({
    root: {
        backgroundColor: "#16191C",
    }
});

export default function ContinuousSlider({ zoomIn }) {
    const classesSlider = useStylesSlider();
    const classesCard = useStylesCard();
    const [value, setValue] = React.useState(1);
    const setScale = useSelector(state => state.zoomSliderReducer.function)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setScale(newValue, 0, 'linear');
    };

    return (
        <Card className={classesCard.root}>
            <div className={classesSlider.root}>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={1}>
                    <Grid item>
                        <RemoveIcon htmlColor="white" />
                    </Grid>
                    <Grid item xs>
                        <Slider min={1} max={2} step={0.01} style={{ color: 'white' }} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <AddIcon htmlColor="white" />
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
}