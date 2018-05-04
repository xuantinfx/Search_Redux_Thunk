import React from "react";

export default class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyWord: "" };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.keyWord);
  };
  handleChange = event => {
    this.setState({ keyWord: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.keyWord}
          placeholder="Nhập từ khoá!"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
