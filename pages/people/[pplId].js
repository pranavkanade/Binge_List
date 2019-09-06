import React from "react";
import { Container } from "semantic-ui-react";
import Layout from "../../src/components/layout/layout";
import PeopleProfile from "../../src/components/profile";

const people = props => {
  return (
    <Layout>
      <Container>
        <PeopleProfile pplId={props.pplId} />
      </Container>
    </Layout>
  );
};

people.getInitialProps = async ({ query }) => {
  const pplId = query.pplId;
  return { pplId: pplId };
};

export default people;
