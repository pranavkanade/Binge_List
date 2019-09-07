import React, { Component } from "react";
import Link from "next/link";
import { getDetailedMovie, getMovieCredits } from "../../api/movies";
import {
  Segment,
  Image,
  Grid,
  Header,
  Label,
  Icon,
  Message,
  Statistic,
  ImageGroup,
  Button,
  Divider
} from "semantic-ui-react";

import Loader from "../ui/loader";

class Detailed extends Component {
  state = {
    currentMovie: null,
    currentMovieCast: null,
    showAllCast: false,
    currentMovieId: this.props.movieId
  };

  renderGenres = () => {
    const genres = this.state.currentMovie.genres.map(gen => {
      return (
        <Label as="a" color="teal" key={gen.id} size="large">
          {gen.name}
        </Label>
      );
    });

    return <React.Fragment>{genres}</React.Fragment>;
  };

  renderStats = () => {
    const { currentMovie } = this.state;
    return (
      <Statistic.Group size="mini" fluid>
        <Statistic>
          <Statistic.Value>
            <Icon name="star" color="yellow" /> {currentMovie.vote_average}/10
          </Statistic.Value>
          <Statistic.Label>Rating</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="like" color="pink" /> {currentMovie.vote_count}
          </Statistic.Value>
          <Statistic.Label>Votes</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="clock outline" /> {currentMovie.runtime}
          </Statistic.Value>
          <Statistic.Label>mins</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="language" color="blue" />{" "}
            {currentMovie.original_language}
          </Statistic.Value>
          <Statistic.Label>language</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    );
  };

  renderCastMembers = () => {
    if (!this.state.currentMovieCast) {
      return <Loader />;
    }

    let currentMovieCast = null;
    if (this.state.currentMovieCast.length > 5 && !this.state.showAllCast) {
      currentMovieCast = this.state.currentMovieCast.slice(0, 5);
    } else {
      currentMovieCast = this.state.currentMovieCast;
    }
    const castMembers = currentMovieCast.map(member => {
      if (!member.profile_path) {
        return null;
      }
      return (
        <Link
          key={member.id}
          href="/people/[pplId]"
          as={`/people/${member.id}`}>
          <Image
            spaced
            src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
            size="small"
            label={
              <Label color="orange" attached="bottom">
                {member.name}
              </Label>
            }
            style={{ cursor: "pointer" }}
          />
        </Link>
      );
    });

    return <ImageGroup size="small">{castMembers}</ImageGroup>;
  };

  render() {
    const currentMovie = this.state.currentMovie;
    if (!currentMovie) {
      return <Loader />;
    }
    return (
      <>
        <br />
        <Segment basic>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={`https://image.tmdb.org/t/p/w780${currentMovie.backdrop_path}`}
                  size="big"
                />
              </Grid.Column>
              <Grid.Column>
                <Header as="h1">
                  {currentMovie.title}{" "}
                  <Header.Subheader>{currentMovie.tagline}</Header.Subheader>
                </Header>
                <br />
                {this.renderStats()}
                <br />
                <Label color="blue" image size="large">
                  <Icon name="calendar alternate outline" />
                  {currentMovie.release_date}
                  <Label.Detail>Release Date</Label.Detail>
                </Label>
                <br />
                <Segment>
                  <Header>Genres</Header>
                  {this.renderGenres()}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br />
          <Header>Overview</Header>
          <Message info>{currentMovie.overview}</Message>
          <br />
          <Segment textAlign="center" basic>
            <Header as="h2">Cast</Header>
            {this.renderCastMembers()}
            <Divider hidden />
            <Button
              basic
              size="large"
              color="blue"
              onClick={() =>
                this.setState({ showAllCast: !this.state.showAllCast })
              }>
              {this.state.showAllCast ? "Show Less" : "Show All"}
            </Button>
          </Segment>
        </Segment>
      </>
    );
  }

  // on props update fetch the details of a new movie
  componentDidUpdate(prevProps, prevState) {
    if (this.props.movieId != this.state.currentMovieId) {
      this.setState({ currentMovieId: this.props.movieId });
      getDetailedMovie(this.props.movieId, this.storeMovieDetails);
      getMovieCredits(this.props.movieId, this.storeMovieCast);
    }
  }

  storeMovieDetails = currentMovie => {
    this.setState({ currentMovie: currentMovie });
  };

  storeMovieCast = currentMovieCast => {
    this.setState({ currentMovieCast });
  };

  // fetching details of the movie
  componentDidMount() {
    getDetailedMovie(this.props.movieId, this.storeMovieDetails);
    getMovieCredits(this.props.movieId, this.storeMovieCast);
  }
}

export default Detailed;
