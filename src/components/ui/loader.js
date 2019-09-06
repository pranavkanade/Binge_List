import React from "react";
import { Segment, Dimmer, Loader, Placeholder } from "semantic-ui-react";

export default () => {
  return (
    <Segment basic>
      <Dimmer active inverted>
        <Loader size="massive">Loading</Loader>
      </Dimmer>

      <Placeholder fluid style={{ height: 350 }}>
        <Placeholder.Image />
      </Placeholder>
    </Segment>
  );
};
