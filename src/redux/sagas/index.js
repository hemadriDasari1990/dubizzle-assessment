import { watchGetPublicGists, watchGetPublicGistsByName } from "./gist";

import { fork } from "redux-saga/effects";

function* rootSaga() {
  /* Get Public Gists */
  yield fork(watchGetPublicGists);

  /* Get Public Gists By Name */
  yield fork(watchGetPublicGistsByName);
}

export default rootSaga;
