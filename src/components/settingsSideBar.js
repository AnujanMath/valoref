import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import "./settingsSideBar.css"

class SettingsSideBar extends Component {
  state = {
    visible: false,
  }
  setVisible = () => {
    this.setState({
      visible: !this.state.visible,
    })
    console.log(this.state.visible)
  }
  render() {
    return (
      <p>poop</p>
    )
    //   <Sidebar.Pushable as={Segment}>
    //     <Sidebar
    //       as={Menu}
    //       animation="overlay"
    //       icon="labeled"
    //       inverted
    //       vertical
    //       visible={this.state.visible}
    //       width="wide"
    //     >
    //       <Menu.Item onClick={this.setVisible} as="a">
    //         <Icon name="cancel" />
    //         Close
    //       </Menu.Item>
    //     </Sidebar>

    //     <Sidebar.Pusher dimmed={this.state.visible}>
    //       <Grid className="main-content">
    //         <Grid.Row stretched columns={1}>
    //           <Grid.Column textAlign="center" objectFit="contain">
    //             <img
    //               className="map"
    //               src="https://valorantlocker.com/wp-content/uploads/split-layout-offense5-1.png"
    //             ></img>
    //           </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row columns={1}>
    //           <Grid.Column floated="right">
    //             <Button onClick={this.setVisible}>
    //               <Icon name="settings" />
    //               Settings
    //             </Button>
    //           </Grid.Column>
    //         </Grid.Row>
    //       </Grid>
    //     </Sidebar.Pusher>
    //   </Sidebar.Pushable>
  }
}

export default SettingsSideBar
