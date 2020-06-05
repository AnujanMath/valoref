import React from "react"
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Map from "./map"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import SettingsIcon from "@material-ui/icons/Settings"
import CloseIcon from "@material-ui/icons/Close"
import Popover from "@material-ui/core/Popover"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ZoomSlider from "./zoomSlider.js"
import ZoomButtons from "./zoomButtons.js"
import Typography from "@material-ui/core/Typography"
import SwitchListSecondary from "./switchBoard/switchBoardContent.js"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import {
  handleWallToggle,
  handleLabelToggle,
  handleSideChange,
} from "../../_actions"
import { useSelector, useDispatch } from "react-redux"

export default function MainContent() {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia(
        filter: { public_id: { regex: "/maps/haven/Cypher/camera_1//" } }
      ) {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const imageArray = data.allCloudinaryMedia.edges
  /*   "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg",
  "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg",
  "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg",
  "https://image.shutterstock.com/image-photo/casual-young-mixed-family-on-600w-358034447.jpg", */

  const side = useSelector(state => state.settingsReducer.side)
  const wall = useSelector(state => state.settingsReducer.wall)
  const label = useSelector(state => state.settingsReducer.label)
  const showPanels = useSelector(state => state.abilityReducer.showPanel)
  const selectedAbility = useSelector(state => state.abilityReducer.id)
  const dispatch = useDispatch()
  const [imageIndex, setImageIndex] = React.useState(0)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleZoom = option => {
    console.log(option)
    switch (option) {
      case "zoom in":
        childRef.current.zoomOnViewerCenter(1.1)
        break
      case "zoom out":
        childRef.current.zoomOnViewerCenter(0.9)
        break

      case "fit":
        childRef.current.fitToViewer()
        break
      default:
        break
    }
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  //figure out how to use refs with functional components
  const childRef = React.useRef()

  return (
    <Box>
      <Grid container direction="row" spacing={1}>
        <Grid item xs>
          <Map ref={childRef} label={label} wall={wall}></Map>
        </Grid>
        {/* TURN THE SLIDE IN CARDS INTO A FUNCTIONAL COMPONENT */}
        <Slide in={showPanels} mountOnEnter unmountOnExit>
          <Grid container direction="column" item xs={12} md={4} spacing={2}>
            <Grid item>
              <Card raised style={{ backgroundColor: "#16191C" }}>
                <CardContent onClick={() => console.log("click")}>
                  <img src={imageArray[imageIndex].node.secure_url}></img>

                  <h1 style={{ color: "white" }}>{selectedAbility}</h1>
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
                        src={image.node.secure_url}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Slide>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
        spacing={2}
      >
        <Button
          aria-describedby={id}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
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
          <SwitchListSecondary
            wall={wall}
            label={label}
            handleWallToggle={() => dispatch(handleWallToggle())}
            handleLabelToggle={() => dispatch(handleLabelToggle())}
          />
          <ToggleButtonGroup
            value={side}
            exclusive
            style={{ backgroundColor: "#16191C" }}
            onChange={() => dispatch(handleSideChange(side))}
          >
            <ToggleButton value="attack" aria-label="left aligned">
              {/* add selected effects and colorx */}
              <Typography style={{ color: "white" }} variant="h6">
                Attack
              </Typography>
            </ToggleButton>
            <ToggleButton value="defend" aria-label="right aligned">
              <Typography style={{ color: "white" }} variant="h6">
                Defend
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Popover>
        {/* <ZoomButtons zoom={handleZoom} /> */}
      </Grid>
    </Box>
  )
}
