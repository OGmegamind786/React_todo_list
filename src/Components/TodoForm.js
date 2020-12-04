import React, { Component } from "react";
import shortid from "shortid";
export default class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //submit form
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder={"todo..."}
            required
          />
          <button onClick={this.onSubmit}>Add Todo</button>
        </form>
      </div>
    );
  }
}
