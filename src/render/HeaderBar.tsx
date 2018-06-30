
import * as React from 'react';
import { Container, Sidebar, Segment, Card, Button, Menu, Image, Icon, Header, Grid, GridRow, GridColumn } from 'semantic-ui-react';

export class HeaderBar extends React.Component<{ sideBarToggleBtnHandle: Function }, {}> {
    toggleVisibility() {
        this.props.sideBarToggleBtnHandle();
    }
    render() {
        return (
            <Header as='h2' color='pink'>
                {/* <Button icon id='sideBarToggleBtn' onClick={() => this.toggleVisibility()}> */}
                    {/* <Icon name='content' size='small' /> */}
                {/* </Button> */}
                <Image src='assets/icon.png' avatar onClick={() => this.toggleVisibility()}/>
                <Header.Content>
                    Popcorn
                    <Header.Subheader style={{color: 'grey'}}>movie curator</Header.Subheader>
                </Header.Content>
            </Header >
        )

    }
}