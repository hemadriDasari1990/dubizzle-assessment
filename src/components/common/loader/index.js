import React from "react";

const Loader = ({ enable }) => {
  /* React local states */

  return enable ? <h1 className="center">Loading...</h1> : null;
};
export default Loader;
