import React from "react"
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Map from "./map"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import SettingsIcon from "@material-ui/icons/Settings"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import Popover from "@material-ui/core/Popover"

import ZoomSlider from "./zoomSlider.js"
import SwitchListSecondary from "./switchBoard.js"
export default function MainContent() {
    const [showPanels, setShowPanels] = React.useState(false)
    const [imageArray, setImageArray] = React.useState([
        "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg",
        "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg",
        "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg",
        "https://image.shutterstock.com/image-photo/casual-young-mixed-family-on-600w-358034447.jpg",
    ])
    const [imageIndex, setImageIndex] = React.useState(-1)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const togglePanel = () => {
        setShowPanels(!showPanels)
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleZoom = (event) => {
        console.log(event);
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined


    return (
        <Box>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={8}>
                    <Map></Map>
                    <Button onClick={() => togglePanel()} variant="contained" color="primary">
                        Panel Toggle
      </Button>
                </Grid>
                <Slide in={showPanels} mountOnEnter unmountOnExit>
                    <Grid container direction="column" item xs={12} md={4} spacing={2}>
                        <Grid item>
                            <Card raised style={{ backgroundColor: "#16191C" }}>
                                <CardContent onClick={() => console.log("click")}>
                                    <img src={imageArray[imageIndex]}></img>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container item spacing={2}>
                            <div></div>
                            {imageArray.map((image, index) => (
                                <Grid item xs={6} key={index}>
                                    <Card
                                        raised
                                        style={{ backgroundColor: "#16191C", cursor: "pointer" }}
                                    >
                                        <CardContent>
                                            <img
                                                style={{ width: "auto", height: "auto" }}
                                                onClick={() => setImageIndex(index)}
                                                src={image}
                                            ></img>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Slide>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={2}>
                <Button
                    aria-describedby={id}
                    onClick={handleClick}
                    variant="contained"
                    style={{ background: "#16191C" }}
                >
                    {" "}
                    {/* I think theres a better way to right align lol front end amature smh */}
                    {open ? (
                        <CloseIcon style={{ color: "#7a7a7a" }} />
                    ) : (
                            <SettingsIcon style={{ color: "#7a7a7a" }} />
                        )}
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
                    <SwitchListSecondary />
                </Popover>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={2}>
                <ZoomSlider />
            </Grid>
        </Box>
    )
}
