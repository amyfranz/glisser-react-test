import React, { Component } from "react";
import EditDetails from "../EditDetails/EditDetails";
import EditBio from "../EditBio/EditBio";
import "./EditForm.css";

export default class EditForm extends Component {
  state = { firstName: null, lastName: null, bio: null };
  componentDidMount() {
    const { firstName, lastName, bio } = this.props;
    this.setState({
      firstName,
      lastName,
      bio,
    });
  }
  render() {
    return (
      <div className="popup">
        <span className="close" onClick={() => this.props.submit()}>
          X
        </span>
        <h3>Edit your {this.props.edit}</h3>
        <form onSubmit={this.handleSubmit}>
          {this.props.edit === "details" ? (
            <EditDetails
              onChange={this.handleChange}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
            />
          ) : (
            <EditBio onChange={this.handleChange} bio={this.state.bio} />
          )}
          <button className="ok" type="submit">
            Ok
          </button>
        </form>
      </div>
    );
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
  };
}
