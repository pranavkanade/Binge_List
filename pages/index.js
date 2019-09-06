import React from "react";
import { Button, Segment, Container, Header, Card } from "semantic-ui-react";
import style from "./../static/styles/style.scss";
import Layout from "../src/components/layout/layout";
import InTheaterBox from "../src/components/inTheaterBlock";

const index = () => {
  return (
    <Layout>
      <Container>
        <div className={style.App}>
          <InTheaterBox />
        </div>
      </Container>
    </Layout>
  );
};

export default index;
