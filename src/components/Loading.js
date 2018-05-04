import React from "react";
import "../css/loading.css";
export default class Loading extends React.Component {
  render() {
    if (this.props.isFetching) {
      return (
        <div className="atom-spinner">
          <div className="spinner-inner">
            <div className="spinner-line" />
            <div className="spinner-line" />
            <div className="spinner-line" />
            <div className="spinner-circle">&#9679;</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
