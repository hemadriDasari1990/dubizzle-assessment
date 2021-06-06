import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../sagas";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  reduxDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
