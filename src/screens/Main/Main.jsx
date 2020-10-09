import React from 'react';
import { Text, View } from 'react-native';

import styles from './Main.styled';
import WS from '../../components/WS';
import Books from '../../components/Books';
import Trades from '../../components/Trades';
import Ticker from '../../components/Ticker';

import {
  bookEvent,
  tradesEvent,
  tickerEvent,
} from './events';

const Main = ({ books, trades, ticker, socketMessage }) => {
  let ws;

  return (
    <View style={styles.container}>
      <Books records={books.records} />
      <View style={styles.separator} />

      <Trades records={trades.records} />
      <View style={styles.separator} />

      <Ticker records={ticker.records} />
      <View style={styles.separator}  />

      <WS
        ref={ref => { ws = ref }}
        url="wss://api-pub.bitfinex.com/ws/2"
        onOpen={() => {
          // ws.send(bookEvent);
          ws.send(tradesEvent);
          ws.send(tickerEvent);
        }}
        onMessage={socketMessage}
        onError={console.log}
        onClose={console.log}
        retry
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
