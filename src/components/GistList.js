import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { useLoading } from "../redux/state/gist";

const GistDetails = React.lazy(() => import("./GistDetails"));

const GistList = (props) => {
  const { gistsList } = props;

  /* Redux hooks */
  const { loading } = useLoading();

  /* Handler functions */
  const renderGists = () => {
    if (!loading && Array.isArray(gistsList) && gistsList.length) {
      return gistsList.map((gist) => (
        <GistGrid key={gist.id}>
          <GistDetails gist={gist} />
        </GistGrid>
      ));
    }
    if (!loading) {
      return (
        <h1 id="no-records" className="center">
          No users found
        </h1>
      );
    }
    return null;
  };

  return <Container data-testid="gist-list-items">{renderGists()}</Container>;
};

const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  max-width: 700px;
`;

const GistGrid = styled.div`
  max-height: 220px;
  width: 100%;
`;

GistList.propTypes = {
  gistsList: PropTypes.array,
};

export default GistList;
