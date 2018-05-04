import React from "react";
import Topic from "./Topic";

export default class ListTopic extends React.Component {
  render() {
    return (
      <div style={{marginTop: 30}}>
        {this.props.listTopic.map((item, key) => {
          return <Topic key={key}>{key + 1}. {item}</Topic>;
        })}
      </div>
    );
  }
}
