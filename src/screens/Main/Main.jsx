import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './Main.styled';
import WS from '../../components/WS';
import Books from '../../components/Books';
import Trades from '../../components/Trades';
import Ticker from '../../components/Ticker';
import Button from '../../components/Button';

import {
  apiSymbol,
  bookEvent,
  tradesEvent,
  tickerEvent,
} from './events';

const BITFINEX_WSS = 'wss://api-pub.bitfinex.com/ws/2';

const ButtonContainer = ({ onReconnect, onDisconnect, isDisconnected }) => (
  <View style={styles.buttonWrapper}>
    <Button
      onPress={onReconnect}
      text="Reconnect"
    />
    {
      isDisconnected
        ? <Text style={styles.text}>OFF</Text>
        : <Text style={styles.text}>ON</Text>
    }
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
  const [isDisconnected, setIsDisconnected] = useState(false);

  let ws;

  const onReconnect = () => {
    if (ws) {
      ws.reconnect();
      setIsDisconnected(false);
    }
  };

  const onDisconnect = () => {
    if (ws) {
      ws.disconnect();
      setIsDisconnected(true);
    }
  };

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
        isDisconnected={isDisconnected}
      />

      <Books apiSymbol={apiSymbol} records={book.records} />
      <View style={styles.separator} />

      <Trades records={trades.records} />
      <View style={styles.separator} />

      <Ticker apiSymbol={apiSymbol} records={ticker.records} />
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
