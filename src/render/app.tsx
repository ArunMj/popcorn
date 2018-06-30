import * as React from 'react';
import TileView from './TileView';
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

import { HeaderBar } from './HeaderBar';

export const SideMenu = () =>
    (
        <div>
            <Menu.Item name='home'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
            </Menu.Item>
            <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
            </Menu.Item>
        </div>
    );

export class App extends React.Component<any, any> {
    state = { visible: true };

    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;
        return (
            <div className='full'>
                <HeaderBar sideBarToggleBtnHandle={this.toggleVisibility} />
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <SideMenu />
                    </Sidebar>
                    <Sidebar.Pushe>
                        <Segment basic>
                            <TileView/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable >
            </div >
        )
    }
}

export default App