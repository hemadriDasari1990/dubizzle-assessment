import {
  GET_PUBLIC_GISTS_BY_NAME_FAILED,
  GET_PUBLIC_GISTS_BY_NAME_REQUEST,
  GET_PUBLIC_GISTS_BY_NAME_SUCCESS,
  GET_PUBLIC_GISTS_FAILED,
  GET_PUBLIC_GISTS_REQUEST,
  GET_PUBLIC_GISTS_SUCCESS,
} from "../../actions/gist/types";
import { getGistForUser, getPublicGists } from "../../../services/gistService";
import { put, takeLatest } from "redux-saga/effects";

function* callGetPublicGists() {
  try {
    const result = yield getPublicGists();
    const { status, data } = result;
    if (status === 200) {
      yield put({
        type: GET_PUBLIC_GISTS_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    yield put({ type: GET_PUBLIC_GISTS_FAILED, payload: err });
  }
}

export function* watchGetPublicGists() {
  yield takeLatest(GET_PUBLIC_GISTS_REQUEST, callGetPublicGists);
}

function* callGetPublicGistsByName(action) {
  try {
    const result = yield getGistForUser(action.username);
    const { status, data } = result;
    if (status === 200) {
      yield put({ type: GET_PUBLIC_GISTS_BY_NAME_SUCCESS, payload: data });
    }
  } catch (err) {
    yield put({
      type: GET_PUBLIC_GISTS_BY_NAME_FAILED,
      payload: err,
    });
  }
}

export function* watchGetPublicGistsByName() {
  yield takeLatest(GET_PUBLIC_GISTS_BY_NAME_REQUEST, callGetPublicGistsByName);
}
