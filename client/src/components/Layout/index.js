// Externals
import React, { Component } from "react";

// External Components
import Modal from "react-modal";

// Components
import Chat from "../../Chat";
import UsernameForm from "../UserNameForm";

export default class Layout extends Component {
  state = {
    username: "",
    usernameIsSubmitted: ""
  };

  handleUsernameChange = e => {
    const username = e.target.value.trim();
    this.setState({ username });
  };

  handleUsernameSubmit = e => {
    e.preventDefault();

    this.setState({
      usernameIsSubmitted: true
    });
  };

  render() {
    const { usernameIsSubmitted, username } = this.state;

    if (usernameIsSubmitted) {
      return <Chat username={username}/>;
    }

    return (
      <Modal
        isOpen={!usernameIsSubmitted}
        ariaHideApp={false} //is needed otherwise you get a warning
        style={{
          content: {
            margin: "auto",
            bottom: "unset",
            top: "60px",
            border: "unset",
            color: username.length > 0 ? "black" : "grey",
            width: "190px",
            height: "40px",
            padding: 0
          }
        }}
      >
        <UsernameForm
          onSubmit={this.handleUsernameSubmit}
          onChange={this.handleUsernameChange}
          value={username}
        />
      </Modal>
    );
  }
}
