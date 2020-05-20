import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"
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
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        if (newValue !== value)
            zoomIn(newValue > value ? 1.02 : 0.98);
        setValue(newValue);

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
                        <Slider style={{ color: 'white' }} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <AddIcon htmlColor="white" />
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
}