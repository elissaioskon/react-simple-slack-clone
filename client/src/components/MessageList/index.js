import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Message from "../Message";

// Styled
import { Container } from "./styled";

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        header: PropTypes.string
      })
    ).isRequired,
    emptyMessage: PropTypes.string.isRequired
  };

  containerRef = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.containerRef.current.scrollIntoView()
  };

  render() {
    const { messages, emptyMessage } = this.props;

    return (
      <Container>
        {messages.length > 0
          ? messages.map(({ id, content, header }) => (
              <Message key={id} content={content} header={header} />
            ))
          : emptyMessage}
        <div ref={this.containerRef} />
      </Container>
    );
  }
}
