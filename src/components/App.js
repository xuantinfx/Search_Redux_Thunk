import React, { Component } from "react";
//import '../App.css';
import InputSearch from "../containers/InputSearch";
import ListTopic from "../containers/ListTopic";
import Loading from "../containers/Loading";
import "../css/test.css";
import InfiniteScroll from "react-infinite-scroller";

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
            <ListTopic />
            <Loading/>
          </div>
        </InfiniteScroll>
      );
    // } else {
    //   return (
    //     <div className="App">
    //       <InputSearch />
    //       <ListTopic />
    //       <Loading/>
    //     </div>
    //   );
    // }
  }
}

export default App;
