import React, { Component } from "react";
import { getPersonsProfile, getPersonsMovieCredits } from "../api/people";
import {
  Segment,
  Placeholder,
  Image,
  Grid,
  Header,
  Label,
  Icon,
  Statistic,
  Card
} from "semantic-ui-react";
import MovieCard from "./ui/movieCard";
import Loader from "./ui/loader";

class PeopleProfiles extends Component {
  state = {
    profileInfo: null,
    movieCredits: null
  };

  renderMovieCards = () => {
    if (!this.state.movieCredits) {
      return (
        <Placeholder fluid style={{ height: 350 }}>
          <Placeholder.Image />
        </Placeholder>
      );
    }
    const movieCards = this.state.movieCredits.cast.map(movie => {
      return <MovieCard movie={movie} key={movie.id} />;
    });

    return <>{movieCards}</>;
  };

  renderMovieList = () => {
    return <Card.Group itemsPerRow={5}>{this.renderMovieCards()}</Card.Group>;
  };

  render() {
    const { profileInfo } = this.state;
    if (!profileInfo) {
      return <Loader />;
    }
    return (
      <>
        <br />
        <Segment basic>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width="6">
                <Image
                  floated="right"
                  src={`https://image.tmdb.org/t/p/h632${profileInfo.profile_path}`}
                  size="medium"
                />
              </Grid.Column>
              <Grid.Column width="10">
                <Header as="h1">
                  {profileInfo.name}{" "}
                  <Header.Subheader>
                    Known for {profileInfo.known_for_department}
                  </Header.Subheader>
                </Header>
                <Label color="teal" image size="large">
                  <Icon name="birthday cake" />
                  {profileInfo.birthday}
                  <Label.Detail>Birthday</Label.Detail>
                </Label>{" "}
                <Label color="black" image size="large">
                  <Icon name="map pin" />
                  {profileInfo.place_of_birth}
                  <Label.Detail>Birth Place</Label.Detail>
                </Label>
                <br />
                <Segment compact>
                  <Header>Career</Header>
                  {!this.state.movieCredits ? null : (
                    <Statistic size="mini">
                      <Statistic.Value>
                        <Icon name="video camera" color="black" />{" "}
                        {this.state.movieCredits.cast.length}
                      </Statistic.Value>
                      <Statistic.Label>Movies</Statistic.Label>
                    </Statistic>
                  )}
                  {!this.state.movieCredits ? null : (
                    <Statistic size="mini">
                      <Statistic.Value>
                        <Icon name="box" color="green" />{" "}
                        {this.state.movieCredits.crew.length}
                      </Statistic.Value>
                      <Statistic.Label>Productions</Statistic.Label>
                    </Statistic>
                  )}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment>
            <Header as="h3">Bio</Header>
            <p>{profileInfo.biography}</p>
          </Segment>

          <Segment basic>
            <Header as="h2">Movies of {profileInfo.name}</Header>
            {this.renderMovieList()}
          </Segment>
        </Segment>
      </>
    );
  }

  storeProfileInfo = info => {
    this.setState({ profileInfo: info });
  };

  storeMovieCredits = credits => {
    this.setState({ movieCredits: credits });
  };

  componentDidMount() {
    getPersonsProfile(this.props.pplId, this.storeProfileInfo);
    getPersonsMovieCredits(this.props.pplId, this.storeMovieCredits);
  }
}

export default PeopleProfiles;
