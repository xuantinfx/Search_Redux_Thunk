import React from "react";
import "../css/loading.css";
export default class Loading extends React.Component {
  render() {
    if (this.props.isFetching) {
      return (
        <div className="self-building-square-spinner">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square clear" />
          <div className="square" />
          <div className="square" />
          <div className="square clear" />
          <div className="square" />
          <div className="square" />
        </div>
      );
    }
    else{
      return null;
    }
  }
}
