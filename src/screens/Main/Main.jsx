import React from 'react';
import { View } from 'react-native';

import styles from './Main.styled';
import WS from '../../components/WS';
import Books from '../../components/Books';
import Trades from '../../components/Trades';
import Ticker from '../../components/Ticker';
import Button from '../../components/Button';

import {
  bookEvent,
  tradesEvent,
  tickerEvent,
} from './events';

const BITFINEX_WSS = 'wss://api-pub.bitfinex.com/ws/2';

const ButtonContainer = ({ onReconnect, onDisconnect }) => (
  <View style={styles.buttonWrapper}>
    <Button
      onPress={onReconnect}
      text="Reconnect"
    />
    <Button
      onPress={onDisconnect}
      text="Disconnect"
    />
  </View>
);


const Main = ({
  book,
  trades,
  ticker,
  socketMessage,
  socketClose,
}) => {
  let ws;

  const onReconnect = () => ws && ws.reconnect();

  const onDisconnect = () => ws && ws.disconnect();

  const onOpen = () => {
    if (ws && ws.send) {
      ws.send(bookEvent);
      // ws.send(tradesEvent);
      ws.send(tickerEvent);
    }
  };

  return (
    <View style={styles.container}>
      <ButtonContainer
        onReconnect={onReconnect}
        onDisconnect={onDisconnect}
      />

      <Books apiSymbol="BTC/USD" records={book.records} />
      <View style={styles.separator} />

      <Trades records={trades.records} />
      <View style={styles.separator} />

      <Ticker apiSymbol="BTC/USD" records={ticker.records} />
      <View style={styles.separator}  />

      <WS
        ref={ref => { ws = ref }}
        url={BITFINEX_WSS}
        onOpen={onOpen}
        onMessage={socketMessage}
        onError={console.log}
        onClose={socketClose}
      />
    </View>
  );
};

Main.defaultProps = {
  books: {},
  trades: {},
  ticker: {},
};

export default Main;
