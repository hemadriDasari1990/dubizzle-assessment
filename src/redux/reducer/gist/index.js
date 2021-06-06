import {
  GET_PUBLIC_GISTS_BY_NAME_FAILED,
  GET_PUBLIC_GISTS_BY_NAME_REQUEST,
  GET_PUBLIC_GISTS_BY_NAME_SUCCESS,
  GET_PUBLIC_GISTS_FAILED,
  GET_PUBLIC_GISTS_REQUEST,
  GET_PUBLIC_GISTS_SUCCESS,
} from "../../actions/gist/types";

const initialState = {
  loading: false,
  response: null,
};

const gist = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_GISTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PUBLIC_GISTS_FAILED:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_PUBLIC_GISTS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_PUBLIC_GISTS_BY_NAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PUBLIC_GISTS_BY_NAME_FAILED:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_PUBLIC_GISTS_BY_NAME_SUCCESS:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default gist;
