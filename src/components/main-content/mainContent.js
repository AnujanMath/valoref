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
import { handleWallToggle, handleLabelToggle, handleSideChange } from "../../_actions"
import { useSelector, useDispatch } from "react-redux"

const imageArray = [
  "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg",
  "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg",
  "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg",
  "https://image.shutterstock.com/image-photo/casual-young-mixed-family-on-600w-358034447.jpg",
]

export default function MainContent() {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }) {
        childCloudinaryAsset {
          fixed {
            ...CloudinaryAssetFixed
          }
        }
      }
    }
  `)
  const side = useSelector(state => state.settingsReducer.side)
  const wall = useSelector(state => state.settingsReducer.wall)
  const label = useSelector(state => state.settingsReducer.label)
  const dispatch = useDispatch()

  const [showPanels, setShowPanels] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [fullCol, setFullCol] = React.useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleZoom = option => {
    console.log(option)
    switch (option) {
      case 'zoom in':
        childRef.current.zoomOnViewerCenter(1.1)
        break;
      case 'zoom out':
        childRef.current.zoomOnViewerCenter(0.9)
        break;

      case 'fit':
        childRef.current.fitToViewer()
        break;
      default:
        break;
    }
  }
  const changeColSize = () => {
    setShowPanels(!showPanels);
    if (showPanels) {
      setTimeout(() => {
        setFullCol(!showPanels);
      }, 225)
    } else {
      setFullCol(!showPanels);
    }
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const childRef = React.useRef()

  return (
    <Box >
      <Grid container direction="row" spacing={1} >
        <Grid item xs={12} md={fullCol ? 8 : 12}>
          <Map ref={childRef} label={label} wall={wall}></Map>
          <Button
            onClick={changeColSize}
            variant="contained"
            color="primary"
          >
            Panel Toggle
          </Button>
        </Grid>
        <Slide in={showPanels} mountOnEnter unmountOnExit>
          <Grid container direction="column" item xs={12} md={4} spacing={2}>
            <Grid item>
              <Card raised style={{ backgroundColor: "#16191C" }}>
                <CardContent onClick={() => console.log("click")}>
                  <Img
                    fixed={data.file.childCloudinaryAsset.fixed}
                    alt="banner"
                  />
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
                      <Img
                        fixed={data.file.childCloudinaryAsset.fixed}
                        alt="banner"
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
        <ZoomButtons zoom={handleZoom} />
      </Grid>
    </Box>
  )
}
