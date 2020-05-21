import React from "react"
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Map from "./map"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import SettingsIcon from "@material-ui/icons/Settings"
import CloseIcon from "@material-ui/icons/Close"
import Popover from "@material-ui/core/Popover"

import ZoomSlider from "./zoomSlider.js"
import SwitchListSecondary from "./switchBoard/switchBoardContent.js"

import { handleWallToggle, handleLabelToggle } from "../../_actions"
import { useSelector, useDispatch } from "react-redux"

const imageArray = [
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg",
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg",
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg",
    "https://image.shutterstock.com/image-photo/casual-young-mixed-family-on-600w-358034447.jpg",
]

export default function MainContent() {

    const wall = useSelector(state => state.settingsReducer.wall);
    const label = useSelector(state => state.settingsReducer.label);
    const dispatch = useDispatch();

    const [showPanels, setShowPanels] = React.useState(false)
    const [imageIndex, setImageIndex] = React.useState(-1)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleZoom = (zoomNumber) => {
        console.log(zoomNumber);
        childRef.current.zoomOnViewerCenter(zoomNumber)
    }

    const open = Boolean(anchorEl)
    const id = open ? "simple-popover" : undefined

    const childRef = React.useRef();
    //

    return (
        <Box>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={8}>
                    <Map ref={childRef} label={label} wall={wall}></Map>
                    <Button onClick={() => setShowPanels(!showPanels)} variant="contained" color="primary">
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
                    {open ? (<CloseIcon  style={{ color: "#7a7a7a" }} />) : (<SettingsIcon style={{ color: "#7a7a7a" }} />)}
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
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={2}>
                <ZoomSlider zoomIn={handleZoom} />
            </Grid>
        </Box >
    )
}
