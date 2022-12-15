import createSagaMiddleware from "redux-saga";
import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";

import rootReducer from "./modules";
import sagas from "./modules/sagas";

// Redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(sagas);

export default store;
