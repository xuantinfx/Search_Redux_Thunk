import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("STATE:", store.getState());
});

ReactDOM.render(
  <Container>
    <Row>
      <Col sm={{ size: 8, offset: 2 }}>
        <Provider store={store}>
          <App />
        </Provider>
      </Col>
    </Row>
  </Container>,
  document.getElementById("root")
);
registerServiceWorker();
