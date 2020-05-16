import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Map from './map'

class MainSidebar extends Component {

    render() {
        console.log('dafge')
        return (
            <div style={{ height: '100vh' }}>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        inverted
                        vertical
                        visible
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                  Games
                </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                  Channels
                </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher>
                            <Map></Map>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}


export default MainSidebar
