import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timer from 'react-native-timer';

// @NOTE: interval to update main store from temporary store
const SYNC_TIME = 1000;
const SYNC_NAME = 'syncStore';

class WS extends Component {
  state = {
    ws: null,
    isDisconnected: false,
  };

  static propTypes = {
    url: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired,
    onMessage: PropTypes.func.isRequired,
    onError: PropTypes.func,
    onClose: PropTypes.func,
    syncEvent: PropTypes.func.isRequired,
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
    timer.setInterval(
      this,
      SYNC_NAME,
      this.props.syncEvent,
      SYNC_TIME,
    );
  };

  componentWillUnmount() {
    this.state.ws.close();
    timer.clearTimeout(this, SYNC_NAME);
  };

  render () {
    return null;
  };
}

export default WS;
