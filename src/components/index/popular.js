import React, { Component } from "react";
import { getPopularMovies } from "../../api/movies";
import Listing from "../ui/listing";
import { Button, Segment, Icon } from "semantic-ui-react";
import Loader from "../ui/loader";

const DEFAULT_NUM = 8;
class PopularMovies extends Component {
  state = {
    moviesList: null,
    activePage: 1,
    totalPages: 1,
    showCount: DEFAULT_NUM
  };

  processMovieList = () => {
    if (this.state.showCount < this.state.moviesList.length) {
      return this.state.moviesList.slice(0, this.state.showCount);
    }
    return this.state.moviesList;
  };

  handleShowMore = () => {
    if (this.state.showCount + DEFAULT_NUM < this.state.moviesList.length) {
      const { showCount } = this.state;
      this.setState({ showCount: showCount + DEFAULT_NUM });
    } else {
      this.setState({ showCount: this.state.moviesList.length });
    }
  };

  handleShowLess = () => {
    if (this.state.showCount - DEFAULT_NUM > DEFAULT_NUM) {
      const { showCount } = this.state;
      this.setState({ showCount: showCount - DEFAULT_NUM });
    } else {
      this.setState({
        showCount:
          this.state.moviesList.length > DEFAULT_NUM
            ? DEFAULT_NUM
            : this.state.moviesList.length
      });
    }
  };

  render() {
    if (!this.state.moviesList) {
      return <Loader />;
    }
    return (
      <>
        <Listing moviesList={this.processMovieList()} />
        <Segment basic textAlign="center">
          <Button
            color="red"
            disabled={this.state.showCount <= DEFAULT_NUM}
            onClick={this.handleShowLess}
            icon
            labelPosition="left">
            Show Less <Icon name="minus" />
          </Button>
          <Button
            color="blue"
            disabled={this.state.showCount == this.state.moviesList.length}
            onClick={this.handleShowMore}
            icon
            labelPosition="right">
            Show More <Icon name="plus" />
          </Button>
        </Segment>
      </>
    );
  }

  storePopularMovies = (moviesList, totalPages) => {
    this.setState({ moviesList, totalPages });
  };

  componentDidMount() {
    getPopularMovies(this.state.activePage, this.storePopularMovies);
  }
}

export default PopularMovies;
