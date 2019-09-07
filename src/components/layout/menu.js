import React, { Component } from "react";
import { Menu, Container, Header } from "semantic-ui-react";
export default class Menubar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive" stackable inverted color="orange" attached>
        <Container>
          <Menu.Menu>
            <Menu.Item href="/">
              <Header as="h1" style={{ color: "white" }}>
                Binge-List
              </Header>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              name="movies"
              href="/movies"
              active={activeItem === "movies"}
              onClick={this.handleItemClick}>
              Movie Catalog
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
