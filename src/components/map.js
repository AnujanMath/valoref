import React, { Component } from 'react';
import { Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import './map.css'

class Map extends Component {
    state = {
        visible: false
    }
    setVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
        console.log(this.state.visible)
    }
    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible={this.state.visible}
                    width='wide'
                >
                    <Menu.Item onClick={this.setVisible} as='a'>
                        <Icon name='cancel' />
          Close
        </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={this.state.visible}>
                    <div className='main-content' style={{ height: '99.8vh' }}>
                        <div style={{ textAlign: 'center', objectFit: 'contain' }} >
                            <img className='map' src='https://valorantlocker.com/wp-content/uploads/split-layout-offense5-1.png'></img>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <Button onClick={this.setVisible}><Icon name='settings' />Settings</Button>
                        </div>
                    </div>
                </Sidebar.Pusher>

            </Sidebar.Pushable>
        )
    }
}

export default Map