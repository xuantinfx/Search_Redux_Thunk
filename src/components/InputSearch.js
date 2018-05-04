import React from "react";
import { Form, FormGroup, Row, Col, Input, Button, InputGroupAddon } from "reactstrap";

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
      <Form onSubmit={this.handleSubmit}>
        <Row style={{ marginTop: 50 }}>
          <Col md={{ size: 8 }}>
            <FormGroup size="lg">
              <Input
                type="text"
                onChange={this.handleChange}
                value={this.state.keyWord}
                placeholder="Nhập cụm từ tìm kiếm"
              />
            </FormGroup>
          </Col>
          <Col md={{ size: 4 }}>
            <FormGroup size="lg">
              <Button color="success" type="submit">
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}
