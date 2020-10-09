import React from 'react';
import { Text, View } from 'react-native';

import styles from './Main.styled';
import WS from '../../components/WS/WS';

import {
  bookEvent,
  tradesEvent,
  tickerEvent,
} from './events';

const Main = ({ book, trade, ticker, socketMessage }) => {
  let ws;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book</Text>
      <View style={styles.counter}>
        <Text>
          {JSON.stringify(book)}
        </Text>
      </View>

      <View style={styles.separator} />

      <Text style={styles.title}>Trade</Text>
      <View style={styles.counter}>
        <Text>
          {JSON.stringify(trade)}
        </Text>
      </View>

      <View style={styles.separator} />

      <Text style={styles.title}>Ticker</Text>
      <View style={styles.counter} >
        <Text>
          {JSON.stringify(ticker)}
        </Text>
      </View>

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

export default Main;
