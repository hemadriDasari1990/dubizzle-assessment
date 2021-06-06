import {
  GET_PUBLIC_GISTS_BY_NAME_REQUEST,
  GET_PUBLIC_GISTS_REQUEST,
} from "./types";

export const getPublicGists = () => {
  return {
    type: GET_PUBLIC_GISTS_REQUEST,
  };
};

export const getPublicGistsByName = (username) => {
  return {
    type: GET_PUBLIC_GISTS_BY_NAME_REQUEST,
    username,
  };
};
