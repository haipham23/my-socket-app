import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WS extends Component {
  state = {
    ws: null,
    isDisconnected: false,
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    onOpen: PropTypes.func,
    onMessage: PropTypes.func,
    onError: PropTypes.func,
    onClose: PropTypes.func,
  };

  _handleWebSocketSetup = () => {
    const ws = new WebSocket(this.props.url);

    ws.onopen = () => {
      this.props.onOpen && this.props.onOpen();
    }

    ws.onmessage = (event) => { this.props.onMessage && this.props.onMessage(event); }
    ws.onerror = (error) => { this.props.onError && this.props.onError(error); }
    ws.onclose = () => this.state.isDisconnected
      ? (this.props.onClose && this.props.onClose())
      : this._handleWebSocketSetup();

    this.setState({ ws });
  };

  send = (data) => this.state.ws.send(data);

  disconnect = () => {
    this.setState({ isDisconnected: true }, () => this.state.ws.close());
  };

  reconnect = () => {
    this.setState({ isDisconnected: false }, this._handleWebSocketSetup);
  };

  componentDidMount() {
    this._handleWebSocketSetup();
  };

  componentWillUnmount() {
    this.state.ws.close();
  };

  render () {
    return null;
  };
}

export default WS;
