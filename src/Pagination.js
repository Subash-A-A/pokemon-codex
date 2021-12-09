import React from "react";
import "./Pagination.css";

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div className="button-container">
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
