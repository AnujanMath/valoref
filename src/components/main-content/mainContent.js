import React from "react"
import { Box, Grid, CardContent } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Map from "./map"
import Slide from "@material-ui/core/Slide"
import Button from "@material-ui/core/Button"
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
export default function MainContent() {
  const [showPanels, setShowPanels] = React.useState(false)
  const [showSettings, setShowSettings] = React.useState(false)
  const [imageArray, setImageArray] = React.useState([
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/view_l.jpg",
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/preview.jpg",
    "https://sothatwemaybefree.com/medias/images/stuff_view/16/57fff9315b54c/position1.jpg",
    "https://image.shutterstock.com/image-photo/casual-young-mixed-family-on-600w-358034447.jpg",
  ])

  const [imageIndex, setImageIndex] = React.useState(-1)

  const togglePanel = () => {
    setShowPanels(!showPanels)
  }
  const toggleSettings = () => {
    setShowSettings(!showSettings)
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
      <Button onClick={() => togglePanel()} variant="contained" color="primary">
        Panel Toggle
      </Button>
      <Button onClick={() => toggleSettings()} variant="contained" style={{background:"#16191C", position: 'absolute', right: 50}}> {/* I think theres a better way to right align lol */}
        {  showSettings  ? <CloseIcon style={{ color: "#7a7a7a" }}/> : <SettingsIcon style={{ color: "#7a7a7a" }}/>}
      </Button>
    </Box>
  )
}
