import React, { memo } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './Books.styled';
import formatNumber from '../../utils/formatNumber';


const BookItem = ({ item: { items } }) => {
  const [PRICE, COUNT, AMOUNT] = items;
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

  const _keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={BookItem}
        ListHeaderComponent={BookHeader}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default memo(Books);
