import React, { Component } from "react";
import Link from "next/link";
import { Menu, Container, Header } from "semantic-ui-react";

export default class Menubar extends Component {
  state = { activeItem: "movies" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="massive" stackable inverted color="orange" attached>
        <Container>
          <Menu.Menu>
            <Link href="/">
              <a className="item">Binge-List</a>
            </Link>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              name="movies"
              active={activeItem === "movies"}
              onClick={this.handleItemClick}>
              Movies
            </Menu.Item>

            <Menu.Item
              name="tvShows"
              active={activeItem === "tvShows"}
              onClick={this.handleItemClick}>
              TV Shows
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
