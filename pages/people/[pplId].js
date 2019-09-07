import React from "react";
import PeopleProfile from "../../src/components/profile";

const people = props => {
  return <PeopleProfile pplId={props.pplId} />;
};

people.getInitialProps = async ({ query }) => {
  const pplId = query.pplId;
  return { pplId: pplId };
};

export default people;
