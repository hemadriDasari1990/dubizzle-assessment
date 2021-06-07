import PropTypes from "prop-types";
import React from "react";
import SvgComment from "../assets/comment";
import SvgFile from "../assets/file";
import SvgFileNote from "../assets/fileNote";
import SvgFork from "../assets/fork";
import SvgStar from "../assets/star";
import styled from "styled-components";

const GistDetails = (props) => {
  const { gist } = props;

  /* local variables */
  const createdAt = gist ? gist.created_at.split("T")[0] : "";
  const lastUpdated = gist ? gist.updated_at.split("T")[0] : "";
  const filesCount = Object.keys(gist.files).length || 0;

  return (
    <Wrapper data-testid="gist-details">
      <Row>
        <Row className="align-center w-40">
          <img
            className="avatar-style"
            src={gist.owner.avatar_url}
            alt={gist.owner.login}
          />
          <a href={gist.owner.html_url} target="_blank" className="anchor-link">
            {gist.owner.login}
          </a>
        </Row>
        <Row className="align-center w-50">
          <Row className="align-center">
            <SvgFile color="#1976d2" />
            <a
              href={gist.html_url}
              target="_blank"
              className="anchor-link mr-30"
            >
              <Row>
                <span>{filesCount}&nbsp;</span>
                <span>Files</span>{" "}
              </Row>
            </a>
          </Row>
          <Row className="align-center">
            <SvgFork color="#1976d2" />
            <a
              href={gist.forks_url}
              target="_blank"
              className="anchor-link ml-10 mr-30"
            >
              Forks
            </a>
          </Row>
          <Row className="align-center">
            <SvgComment color="#1976d2" />
            <a
              href={gist.comments_url}
              target="_blank"
              className="anchor-link ml-10 mr-30"
            >
              Comments
            </a>
          </Row>
          <Row className="align-center">
            <SvgStar color="#1976d2" />
            <a
              href={gist.html_url}
              target="_blank"
              className="anchor-link ml-10 mr-30"
            >
              Stars
            </a>
          </Row>
        </Row>
      </Row>
      <Row>
        <p className="mr-8">Created at: {createdAt}</p>
        <p>Last updated: {lastUpdated}</p>
      </Row>
      <span className="description">{gist.description}</span>
      <FilesWrapper>
        {Object.keys(gist.files).map((key, index) => (
          <div className="mt-10" key={`file-${index}`}>
            <a
              href={gist.files[key].raw_url}
              target="_blank"
              className="anchor-link align-center"
            >
              <SvgFileNote color="#1976d2" />
              <span className="ml-10 mr-8 text-bottom">
                {gist.files[key].filename}
              </span>
            </a>
          </div>
        ))}
      </FilesWrapper>
      <div>
        <Hr />
      </div>
    </Wrapper>
  );
};

const Row = styled.div`
  display: flex;
  justfy-content: space-between;
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const Hr = styled.div`
  border: 1px solid #b9b7b733;
`;

const FilesWrapper = styled.div`
  flex-flow: row wrap;
  display: flex;
  max-width: 700px;
  margin-bottom: 40px;
`;

GistDetails.propTypes = {
  gist: PropTypes.shape({
    comments: PropTypes.number,
    comments_url: PropTypes.string,
    commits_url: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    files: PropTypes.object,
    forks_url: PropTypes.string,
    git_pull_url: PropTypes.string,
    git_push_url: PropTypes.string,
    html_url: PropTypes.string,
    id: PropTypes.string,
    node_id: PropTypes.string,
    owner: PropTypes.object,
    public: PropTypes.bool,
    truncated: PropTypes.bool,
    updated_at: PropTypes.string,
    url: PropTypes.string,
    user: PropTypes.any,
  }),
};

export default GistDetails;
