import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Dropdown, Menu, Image, Grid, Item, List, Input, Label } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item icon='facebook f' as='a' href='#'></Menu.Item>
            <Menu.Item icon='twitter' as='a' href='#'></Menu.Item>
            <Menu.Item icon='pinterest' as='a' href='#'></Menu.Item>
            <Menu.Item icon='instagram' as='a' href='#'></Menu.Item>
            <Menu.Item position='right' icon='home' as='a' href='#'></Menu.Item>
            <Menu.Item icon='search' as='a' href='#'></Menu.Item>
            <Menu.Item icon='user' as='a' href='#'></Menu.Item>
            <Dropdown item text="MY CART 0 " icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src="http://courses.ics.hawaii.edu/ics314f20/morea/ui-frameworks/experience-islandsnow-logo.png"></Image>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid container centered>
            <Dropdown item text="Men">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Women">
              <Dropdown.Menu>
                <Dropdown.Item>Dresses</Dropdown.Item>
                <Dropdown.Item>Skirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Kids">
              <Dropdown.Menu>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Shorts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Brands">
              <Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
            <Item> Sales</Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="http://courses.ics.hawaii.edu/ics314f20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png"></Image>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div class="footer">
          <Grid columns={3} container>
            <Grid.Column>Navigation
              <hr/>
              <List items={['About us', 'Videos', 'Store Locations']}></List>
            </Grid.Column>
            <Grid.Column>Main Menu
              <hr/>
              <List items={['About us', 'Videos', 'Store Locations']}></List>
            </Grid.Column>
            <Grid.Column>Connect
              <hr/>
              <List>
                <List.Item>Sign up for the latest updates</List.Item>
                <List.Item>
                  <Input type="text" placeholder="Enter email address" labelPosition="right">
                    <input/>
                    <Label color="black">Join</Label>
                  </Input>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));