import React from "react";
import Topic from "./Topic";

export default class ListTopic extends React.Component {
  render() {
    return (
      <ul>
        {this.props.listTopic.map((item, key) => {
          return <Topic key={key}>{item}</Topic>;
        })}
      </ul>
    );
  }
}
