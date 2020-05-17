import React from "react"
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import Map from './map';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

export default function MainContent() {
    const [showPanels, setShowPanels] = React.useState(false);

    const togglePanel = () => {
        setShowPanels(!showPanels);
    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid direction="column" item xs={12} md={8}>
                    <Map></Map>
                </Grid>
                <Slide direction="top" in={showPanels} mountOnEnter unmountOnExit>
                    <Grid container direction="column" item xs={12} md={4} spacing={2}>
                        <Grid item>
                            <Card style={{ backgroundColor: '#16191C' }}>
                                <CardContent>
                                    <img src={'https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg'}></img>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container item spacing={2}>
                            <div></div>
                            <Grid item xs={6}>
                                <Card style={{ backgroundColor: '#16191C' }}>
                                    <CardContent>
                                        <img src={'https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg'}></img>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card style={{ backgroundColor: '#16191C' }}>
                                    <CardContent>
                                        <img src={'https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg'}></img>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Slide>
            </Grid>
            <Button onClick={() => togglePanel()} variant="contained" color="primary">
                Panel Toggle
      </Button>
        </Box>

    )
}