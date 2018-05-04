import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

let store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('STATE:',store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
