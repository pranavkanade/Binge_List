import React from "react";
import { Pagination } from "semantic-ui-react";

export default props => {
  const { activePage, totalPages } = props;
  return (
    <Pagination
      activePage={activePage}
      onPageChange={props.handlePaginationChange}
      size="medium"
      totalPages={totalPages}
    />
  );
};
