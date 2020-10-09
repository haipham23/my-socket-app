import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './Trades.styled';

const Trades = ({ records }) => {

  return (
    <View>
      <Text style={styles.title}>Trades</Text>
      {/* <View style={styles.container} >
        <Text>
          {JSON.stringify(records)}
        </Text>
      </View> */}
    </View>
  );
};

export default memo(Trades);
