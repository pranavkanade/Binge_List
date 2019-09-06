import React from "react";
import Menubar from "./menu";

const layout = props => {
  return (
    <div>
      <Menubar />
      {props.children}
    </div>
  );
};

export default layout;
