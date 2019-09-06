import React from "react";
import { Button, Segment, Container, Header, Card } from "semantic-ui-react";
import style from "./../static/styles/style.scss";
import InTheaterBox from "../src/components/movies/inTheater";

const index = () => {
  return (
    <Container>
      <div className={style.App}>
        <InTheaterBox />
      </div>
    </Container>
  );
};

export default index;
