import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import CommonReducer from "./reducers/CommonReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ CommonReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

function DataProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default DataProvider;
