import React from "react";
import Link from "next/link";
import { Card, Icon, Image, Header, Label } from "semantic-ui-react";

const MovieCard = props => (
  <Link
    key={props.movie.id}
    href="/movies/[movId]"
    as={`/movies/${props.movie.id}`}>
    <Card fluid>
      <Image
        src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
        size="tiny"
        style={{ height: "320px" }}
        ui={false}
      />
      <Card.Content extra>
        <Header as="h4">{props.movie.title}</Header>
        {props.movie.vote_average && (
          <Label className="rating" attached="top right" color="black">
            <Icon name="star" color="orange" /> {props.movie.vote_average}/10
          </Label>
        )}
      </Card.Content>
    </Card>
  </Link>
);

export default MovieCard;
