import * as React from 'react';
import TileView from './TileView';
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

import { HeaderBar } from './HeaderBar';

export const SideMenu = () =>
  (
    <div>
      <Menu.Item name='home'>
        {/* <Icon name='home' /> */}
        Genre
            </Menu.Item>
      <Menu.Item name='gamepad'>
        {/* <Icon name='gamepad' /> */}
        Year
            </Menu.Item>
      <Menu.Item name='camera'>
        {/* <Icon name='camera' /> */}
        Language
            </Menu.Item>
    </div>
  );

export class App extends React.Component<any, any> {
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div className='AppMain'>
        <HeaderBar sideBarToggleBtnHandle={this.toggleVisibility} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <SideMenu />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic as={Container} className='AppMainContainer' fluid>
              {/* <Container > */}
                <TileView />
              {/* </Container> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable >
      </div >
    )
  }
}

export default App