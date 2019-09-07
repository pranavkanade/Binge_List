import React from "react";
import Menubar from "./menu";
import { Container } from "semantic-ui-react";

const layout = props => {
  return (
    <div>
      <Menubar />
      <Container>{props.children}</Container>
    </div>
  );
};

export default layout;
