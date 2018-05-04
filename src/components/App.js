import React, { Component } from "react";
import InputSearch from "../containers/InputSearch";
import ListTopic from "../containers/ListTopic";
import Loading from "../containers/Loading";
import "../css/test.css";
import { Row, Col } from "reactstrap";
import InfiniteScroll from "react-infinite-scroller";
import Message from './Message'
import Error from './Error'

class App extends Component {
  loadMore = page => {
    this.props.loadMore(this.props.keyWord, page);
  };
  render() {
    //if (this.props.searched) {
    return (
      <InfiniteScroll
        pageStart={1}
        initialLoad={false}
        loadMore={this.loadMore}
        hasMore={this.props.hasMore}
        threshold={500}
      >
        <div className="App">
          <InputSearch />
          <Row>
            <Col md={{size: 8}}>
              {this.props.message?<Message>{this.props.message}</Message>:null}
            </Col>
          </Row>
          <ListTopic />
          <Row>
            <Col md={{size: 8}}>
              {this.props.err?<Error>{this.props.err}</Error>:null}
            </Col>
          </Row>
          <Row >
            <Col md={{size: 2, offset: 4}}>
              <Loading />
            </Col>
          </Row>
        </div>
      </InfiniteScroll>
    );
  }
}

export default App;
