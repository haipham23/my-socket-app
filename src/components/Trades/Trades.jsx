import React, { memo } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './Trades.styled';
import formatNumber from '../../utils/formatNumber';
import formatDate from '../../utils/formatDate';


const TradesItem = ({ item: { items } }) => {
  const [_, MTS, AMOUNT, PRICE] = items;
  const mts = formatDate(MTS);
  const amount = formatNumber(AMOUNT, '0.00000');
  const price = formatNumber(PRICE, '0,0');

  return (
    <View style={styles.row}>
      <Text style={styles.text}>
        {mts}
      </Text>
      <Text style={styles.text}>
        {price}
      </Text>
      <Text style={styles.text}>
        {amount}
      </Text>
    </View>
  );
};


const TradesHeader = () => (
  <View style={styles.row}>
    <Text style={styles.text}>
      TIME
    </Text>
    <Text style={styles.text}>
      PRICE
    </Text>
    <Text style={styles.text}>
      AMOUNT
    </Text>
  </View>
);


const Trades = ({ records, apiSymbol }) => {
  if (!records || !apiSymbol) {
    return null;
  }

  const _keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={TradesItem}
        ListHeaderComponent={TradesHeader}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default memo(Trades);
