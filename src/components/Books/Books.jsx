import React, { memo } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './Books.styled';
import formatNumber from '../../utils/formatNumber';


const BookItem = ({ item }) => {
  const [PRICE, COUNT, AMOUNT] = item;
  const price = formatNumber(PRICE, '0,0.0');
  const count = formatNumber(COUNT, '0');
  const amount = formatNumber(AMOUNT, '0.000');

  return (
    <View style={styles.row}>
      <Text style={styles.text}>
        {price}
      </Text>
      <Text style={styles.text}>
        {count}
      </Text>
      <Text style={styles.text}>
        {amount}
      </Text>
    </View>
  );
};


const BookHeader = () => (
  <View style={styles.row}>
    <Text style={styles.text}>
      PRICE
    </Text>
    <Text style={styles.text}>
      COUNT
    </Text>
    <Text style={styles.text}>
      AMOUNT
    </Text>
  </View>
);


const Books = ({ records, apiSymbol }) => {
  if (!records || !apiSymbol) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={BookItem}
        ListHeaderComponent={BookHeader}
      />
    </View>
  );
};

export default memo(Books);
