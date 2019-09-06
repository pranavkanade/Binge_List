import React from "react";
import { Container } from "semantic-ui-react";
import PeopleProfile from "../../src/components/profile";

const people = props => {
  return (
    <Container>
      <PeopleProfile pplId={props.pplId} />
    </Container>
  );
};

people.getInitialProps = async ({ query }) => {
  const pplId = query.pplId;
  return { pplId: pplId };
};

export default people;
